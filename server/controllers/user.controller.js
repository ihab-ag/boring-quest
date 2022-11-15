const User = require('../models/user.model')

// send friend invite
const sendOrAcceptInvite = async (req, res) => {

    const user_id = req.id
    const invited_id = req.params.invited_id
    try {
        // retrieve user and invited user from database
        const [user, invited_user] = await Promise.all([
            User.findById(user_id).exec(),
            User.findById(invited_id).exec()
        ])

        if (user.companions.includes(invited_id)||invited_user.invites.includes(user_id)) {
            throw 'user already a companion or invited'
        }
        // check if invited user invited the user
        if (user.invites.includes(invited_id)) {
            // remove invited user from invites
            user.invites = user.invites.filter(id => id != invited_id)
            // add companions to both users
            user.companions = [...user.companions, invited_id]
            invited_user.companions = [...invited_user.companions, user_id]

            user.save()
            invited_user.save()
        }
        // send invite to invited user
        else {
            invited_user.invites = [...invited_user.invites, user_id]

            invited_user.save()
        }

        res.json(user)
    }
    catch (error) {
        res.status(400).send(error)
    }

}
// remove companion or guild
const deleteFriend = async (req, res) => {

    const user_id = req.id
    const invited_id = req.params.invited_id
    try {
        // retrieve user and invited user from database
        const [user, invited_user] = await Promise.all([
            User.findById(user_id).exec(),
            User.findById(invited_id).exec()
        ])

        // remove invited user from companions
        if (user.companions.includes(invited_id)) {
            user.companions = user.companions.filter(id => id != invited_id)
            invited_user.companions = invited_user.companions.filter(id => id != user_id)

            user.save()
            invited_user.save()
        }
        else {
            throw 'invited user not a friend'
        }

        res.json(user)
    }
    catch (error) {
        res.status(400).send(error)
    }

}

module.exports = {
    sendOrAcceptInvite,
    deleteFriend
}