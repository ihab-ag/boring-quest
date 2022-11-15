const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: 'name is required',
        maxLength: 30,
        minLength: 3
    },
    username: {
        type: String,
        unique: true,
        required: 'username is required',
        maxLength: 30,
        minLength: 3,
    },
    password: {
        type: String,
        required: 'password is required',
        select: false
    },
    type: {
        type: String,
        required: 'type is required',
        enum: ['adventurer', 'guild']
    },
    level: {
        type: Number,
        default: 1
    },
    exp: {
        type: Number,
        default: 0
    },
    health: {
        type: Number,
        default: 1000
    },
    deaths: {
        type: Number,
        default: 0
    },
    companions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    guilds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    quests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quest'
    }],
    adventures: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Adventure'
    }],
    invites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const User = mongoose.model('User', userSchema)

module.exports = User