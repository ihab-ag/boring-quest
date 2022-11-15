const mongoose = require('mongoose')

const questSchema = mongoose.Schema({
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
    type: {
        type: String,
        enum: ['todo', 'daily', 'weekly', 'monthly', 'adventure'],
        required: 'type is required'
    },
    due: {
        type: Date,
        required: 'due date is required'
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard']
    },
    status: {
        type: String,
        enum: ['in progress', 'submitted', 'failed']
    },
    created_on: {
        type: Date,
        default: new Date()
    },
    submitted_on: {
        type: Date,
    },
    picture_submitted: {
        type: Boolean
    },
    picture_url: {
        type: String
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    assignee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Quest = mongoose.model('Quest', questSchema)

module.exports = Quest