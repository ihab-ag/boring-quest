const mongoose = require('mongoose')
const { questSchema } = require('./quest.model')

const adventureSchema = mongoose.Schema({
    name: {
        type: String,
        required: 'name is required',
        maxLength: 30,
        minLength: 3
    },
    description: {
        type: String,
        required: 'description is required',
        minLength: 3
    },
    due: {
        type: Date,
        required: 'due date is required'
    },
    quests: [questSchema]
})

const Adventure = mongoose.model('Adventure', adventureSchema)

module.exports = Adventure