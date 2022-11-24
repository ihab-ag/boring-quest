const Quest = require('../models/quest.model')
const User = require('../models/user.model')
const sendPushNotification = require('../services/pushNotifications')
const base64toImage = require('../utils/base64toImage')
const { incrementDay, incrementWeek, incrementMonth } = require('../utils/dateFunctions')
const { Expo } = require('expo-server-sdk')


const current_date = new Date().setHours(0, 0, 0)
const REOCCURING_TYPES = ['daily', 'weekly', 'monthly']

// create quest
const createQuest = async (req, res) => {

    const { name, description, type, due, difficulty, assignee_id } = req.body

    const user_id = req.id
    const user_type = req.type

    try {

        const user = await User.findById(user_id).populate('quests')

        const due_date = new Date(due).getTime()

        if (due_date < current_date)
            throw 'due date cannot be less than today'

        const quest = new Quest()

        quest.name = name
        quest.description = description
        quest.type = type
        quest.difficulty = difficulty
        quest.status = 'in progress'
        quest.creator = user_id

        if (REOCCURING_TYPES.includes(quest.type)) {

            const iso_date = new Date(current_date).toISOString()

            if (type === 'daily')
                quest.due = incrementDay(iso_date)

            else if (type === 'weekly')
                quest.due = incrementWeek(iso_date)

            else if (type === 'monthly')
                quest.due = incrementMonth(iso_date)

        }
        else
            quest.due = due

        // if user type guild add assignee to quest and quest to assignee

        if (user_type === 'guild') {

            const assignee = await User.findById(assignee_id)

            if (!assignee.guilds.includes(user_id))
                throw 'assigned user not a member of guild'

            quest.assignee = assignee_id

            await quest.save()

            assignee.quests = [...assignee.quests, quest.id]

            assignee.save()

            // send assigned notification
            if (Expo.isExpoPushToken(assignee.token)) {
                await sendPushNotification(assignee.token, `${user.username} assigned you a quest`)
            }

        }
        else
            await quest.save()

        user.quests = [...user.quests, quest]

        user.save()

        res.json(quest)
    }
    catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

// submit quest
const submitQuest = async (req, res) => {

    const quest_id = req.params.quest_id
    const user_id = req.id
    const { base64Image, picture_submitted } = req.body
    let exp_gained
    let guild
    let stats_data
    // handle level up
    const handleLevelUp = (level, exp) => {
        while (exp >= (level * 5)) {
            let exp_difference = exp - (level * 5)
            level += 1
            exp = exp_difference
        }
        return { level, exp }
    }
    try {

        const quest = await Quest.findById(quest_id)

        const due = new Date(quest.due)

        const quests = []

        // check due time
        if (due.getTime() < current_date)
            throw 'cannot submit after due date'

        // check if quest is already submitted

        if (quest.status !== 'in progress')
            throw 'invalid submition status'


        // handle picture submition
        if (picture_submitted) {

            const path = base64toImage(base64Image, quest_id)

            quest.picture_submitted = true

            quest.picture_url = path

        }

        quest.submitted_on = new Date()
        quest.status = 'submitted'

        await quest.save()

        const user = await User.findById(user_id).populate(['companions','guilds','invites'])

        // handle exp and level
        // gain exp based on difficulty
        if (quest.difficulty === 'easy')
            exp_gained = 5
        else if (quest.difficulty === 'medium')
            exp_gained = 10
        else if (quest.difficulty === 'hard')
            exp_gained = 20

        user.exp += exp_gained

        stats_data = handleLevelUp(user.level, user.exp)

        user.level = stats_data.level

        user.exp = stats_data.exp

        if (quest.assignee) {

            guild = await User.findById(quest.creator)

            guild.exp = exp_gained

            stats_data = handleLevelUp(guild.level, guild.exp)

            guild.level = stats_data.level

            guild.exp = stats_data.exp

            // send assigned notification
            if (Expo.isExpoPushToken(guild.token)) {
                await sendPushNotification(guild.token, `${user.username} submitted a quest`)
            }
        }

        // recreate quest if its reoccuring (daily, weekly, monthly)
        if (REOCCURING_TYPES.includes(quest.type)) {

            const new_quest = new Quest()

            const { name, description, type, difficulty } = quest

            const iso_date = due.toISOString()

            new_quest.name = name
            new_quest.description = description
            new_quest.type = type
            new_quest.created_on = due
            new_quest.difficulty = difficulty
            new_quest.status = 'in progress'
            new_quest.creator = quest.creator
            
            if (guild)
                new_quest.assignee = quest.assignee

            if (type === 'daily')
                new_quest.due = incrementDay(iso_date)

            else if (type === 'weekly')
                new_quest.due = incrementWeek(iso_date)

            else if (type === 'monthly')
                new_quest.due = incrementMonth(iso_date)


            await new_quest.save()

            

            if (guild) {
                guild.quests = [...guild.quests, new_quest]
            }

            user.quests = [...user.quests, new_quest]
        }

        if (guild) {
            guild.save()
        }

        

        res.json({ quests, user })

        user.save()

    }
    catch (error) {
        
        res.status(400).send(error)
    }
}
// fail quests over due date
const failQuest = async () => {

    const handleHealth = (health) => {
        health = health - 10

        if (health === 0) {
            deaths += 1
            health = 1000
        }

        return health
    }

    try {

        const quests = await Quest.find({
            'due': { $lt: current_date },
            'status': 'in progress'
        })

        for (const quest of quests) {
            quest.status = 'failed'

            const user = await User.findById(quest.creator)

            user.health = handleHealth(user.health)

            if (user.type === 'guild') {
                const assignee = await User.findById(quest.assignee)

                assignee.health = handleHealth(assignee.health)

                assignee.save()
            }

            await user.save()

            await quest.save()
        }
    }
    catch (error) {
        console.log("failQuest error: " + error)
    }
}

module.exports = {
    createQuest,
    submitQuest,
    failQuest
}