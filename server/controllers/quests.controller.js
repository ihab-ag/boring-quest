const Quest = require('../models/quest.model')
const User = require('../models/user.model')

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

    try {

        const quest = await Quest.findById(quest_id)

        const due = new Date(quest.due)

        console.log(quest_id)

        const current_date = new Date()

        if (due.getTime() < current_date.getTime())
            throw 'cannot submit after due date'

        quest.status = 'submitted'

        await quest.save()

        const user = await User.findById(user_id).populate('quests')

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