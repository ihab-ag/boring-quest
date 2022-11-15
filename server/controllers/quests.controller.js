const Quest = require('../models/quest.model')
const User = require('../models/user.model')
const base64toImage = require('../utils/base64toImage')
const { incrementDay, incrementWeek, incrementMonth } = require('../utils/dateFunctions')


const current_date = new Date()
const REOCCURING_TYPES = ['daily', 'weekly', 'monthly']

// create quest
const createQuest = async (req, res) => {

    const { name, description, type, due, difficulty, assignee_id } = req.body

    const user_id = req.id
    const user_type = req.type

    try {

        const due_date = new Date(due)

        if (due_date < current_date)
            throw 'due date cannot be less than today'

        const quest = new Quest()

        quest.name = name
        quest.description = description
        quest.type = type
        quest.due = due
        quest.difficulty = difficulty
        quest.status = 'in progress'
        quest.creator = user_id

        // if user type guild add assignee to quest and quest to assignee

        if (user_type === 'guild') {

            quest.assignee = assignee_id

            await quest.save()

            const assignee = await User.findByIdAndUpdate(assignee_id, {
                $push: {
                    quests: quest.id
                }
            })
            console.log(assignee_id)
            assignee.save()
        }
        else
            await quest.save()

        const user = await User.findByIdAndUpdate(user_id, {
            $push: {
                quests: quest.id
            }
        }, {
            new: true
        }).populate('quests')

        user.save()

        res.json(user)
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}

// submit quest
const submitQuest = async (req, res) => {

    const quest_id = req.params.quest_id
    const user_id = req.id
    const { base64Image, picture_submitted } = req.body

    try {

        const quest = await Quest.findById(quest_id)

        const due = new Date(quest.due)

        // check due time
        if (due.getTime() < current_date.getTime())
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

        const user = await User.findById(user_id).populate('quests')

        // handle exp and level
        // gain exp based on difficulty

        if (quest.difficulty === 'easy')
            user.exp += 5
        else if (quest.difficulty === 'medium')
            user.exp += 10
        else if (quest.difficulty === 'hard')
            user.exp += 20

        // handle level up
        while (user.exp >= (user.level * 5)) {
            let exp_difference = user.exp - (user.level * 5)
            user.level += 1
            user.exp = exp_difference
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
            new_quest.creator = user_id

            if (type === 'daily') {
                new_quest.due = incrementDay(iso_date)
            }
            else if (type === 'weekly') {
                new_quest.due = incrementWeek(iso_date)
            }
            else if (type === 'monthly') {
                new_quest.due = incrementMonth(iso_date)
            }

            await new_quest.save()

            user.quests = [...user.quests, new_quest]
        }

        res.json(user)

        user.save()

    }
    catch (error) {

        res.status(400).send(error)
    }
}
// fail quests over due date
const failQuest = async () => {

    try {

        const quests = await Quest.find({
            'due': { $lt: current_date },
            'status': 'in progress'
        })

        for (const quest of quests) {
            quest.status = 'failed'

            const user = await User.findById(quest.creator)

            user.health = user.health - 10

            if (user.health === 0) {
                user.deaths += 1
                user.health = 1000
            }

            await user.save()

            await quest.save()
        }

        console.log('updated failed quests')
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