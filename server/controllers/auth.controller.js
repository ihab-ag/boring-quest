const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// user sign up
const signUp = async (req, res) => {

    const { name, username, password, type } = req.body

    try {
        const user = new User()

        user.name = name
        user.username = username
        user.password = await bcrypt.hash(password, 10)
        user.type = type
        user.level = 1
        user.exp = 0
        user.health = 0
        user.deaths = 0

        await user.save()

        res.json(user)
    }
    catch (error){
        res.status(400).send(error.message)
    }

}

module.exports = {
    signUp
}