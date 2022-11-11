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
        required: 'username is required',
        maxLength: 30,
        minLength: 3,
        unique: 'username must be unique'
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
    },
    exp: {
        type: Number,
    },
    health: {
        type: Number,
    },
    deaths: {
        type: Number,
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
    requests_sent: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    requests_recieved: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const User = mongoose.model('User', userSchema)

module.exports = User