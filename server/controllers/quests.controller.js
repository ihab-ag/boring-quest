const Quest = require('../models/quest.model')
const User = require('../models/user.model')
const base64toImage = require('../utils/base64toImage')


const current_date = new Date()

// create quest
const createQuest = async (req, res) => {

    const { name, description, type, due, difficulty } = req.body

    const user_id = req.id

    try {

        


        const quest = new Quest()

        quest.name = name
        quest.description = description
        quest.type = type
        quest.due = due
        quest.difficulty = difficulty
        quest.status = 'in progress'
        

        await quest.save()

        let user = await User.findByIdAndUpdate(user_id, {
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
        res.status(400).send(error)
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


        // handle picture submition
        if (picture_submitted) {

            const path = base64toImage(base64Image, quest_id)

            quest.picture_submitted = true

            quest.picture_url = path

        }
        
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
console.log(user.exp)
        // handle level up
        while(user.exp >= (user.level * 5)){
            let exp_difference = user.exp - (user.level * 5)
            user.level += 1
            user.exp = exp_difference
        }

        await user.save()
        res.json(user)

    }
    catch (error) {

        res.status(400).send(error)
    }
}


module.exports = {
    createQuest,
    submitQuest
}