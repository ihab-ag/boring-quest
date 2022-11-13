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
        res.status(400).send(error.message)
    }

}

module.exports = {
    createQuest
}