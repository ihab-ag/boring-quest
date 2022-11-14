const Adventure = require('../models/adventure.model')
const Quest = require('../models/quest.model')
const User = require('../models/user.model')

const createAdventure = async (req, res) => {

    const { name, description, due, quests } = req.body
    const user_id = req.id

    try {
        const adventure = new Adventure()

        adventure.name = name
        adventure.description = description
        adventure.due = due

        for (const quest of quests) {

            const new_quest = new Quest()

            new_quest.name = quest.name
            new_quest.description = quest.description
            new_quest.difficulty = quest.difficulty
            new_quest.due = due
            new_quest.creator = user_id
            new_quest.type = 'adventure'
            quest.status = 'in progress'

            await new_quest.save()

            adventure.quests = [...adventure.quests, new_quest]

        }

        await adventure.save()

        const user = await User.findByIdAndUpdate(user_id, {
            $push: {
                adventures: adventure.id
            }
        }, {
            new: true
        }).populate([{
            path: 'adventures',
            populate: {
                path: 'quests'
            }
        },
            'quests'])

        user.save()

        res.json(user)

    }
    catch (error) {

        res.status(400).send(error)
    }
}

module.exports = {
    createAdventure
}