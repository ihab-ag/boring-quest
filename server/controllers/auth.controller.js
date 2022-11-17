const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// user sign up
const signUp = async (req, res) => {

    const { name, username, password, type } = req.body

    try {
        const user = new User()

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/mg

        if (!passwordRegex.test(password))
            throw 'invalid password'

        user.name = name
        user.username = username
        user.password = await bcrypt.hash(password, 10)
        user.type = type

        await user.save()

        res.json(user)
    }
    catch (error) {
        res.status(400).send(error)
    }
}

// login method
const login = async (req, res) => {

    const { username, password } = req.body

    try {

        const user = await User.findOne({ username }).select("+password").populate(['guilds', 'quests', 'companions', 'adventures', 'invites'])

        if (!user)
            throw "Invalid Credentials";

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch)
            throw "Invalid Credentials";

        const token = jwt.sign({
            id: user._id,
            type: user.type
        },
            process.env.JWT_SECRET_KEY, {
            expiresIn: '12h'
        });

        // hide password
        user.password = ""

        return res.json({
            authorisation: {
                token: token,
                type: 'bearer',
            },
            user
        })
    }
    catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    signUp,
    login
}