const mongoose = require('mongoose')

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
    quests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quest'
    }],
    created_on: {
        type: Date,
        default: new Date()
    }
})

const Adventure = mongoose.model('Adventure', adventureSchema)

module.exports = Adventure