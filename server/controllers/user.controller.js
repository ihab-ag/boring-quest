const User = require('../models/user.model')

const ADVENTURER = 'adventurer'
const GUILD = 'guild'
// send friend invite
const sendOrAcceptInvite = async (req, res) => {

    const user_id = req.id
    const invited_id = req.params.invited_id


    try {
        if (user_id === invited_id) {
            throw 'user cannot add themselves'
        }
        // retrieve user and invited user from database
        const [user, invited_user] = await Promise.all([
            User.findById(user_id).exec(),
            User.findById(invited_id).exec()
        ])
        // check if both users are guilds 
        if (user.type === GUILD && invited_user.type === GUILD) {
            throw 'guilds cant be friends'
        }
        // check if invited user is already invited
        if (invited_user.invites.includes(user_id)) {
            throw 'user already invited'
        }
        // check if user is a companion or guild member
        else if (user.companions.includes(invited_id) || (user.type === ADVENTURER && user.guilds.includes(invited_id))) {
            throw 'user already a friend'
        }

        // check if invited user invited the user
        if (user.invites.includes(invited_id)) {
            // remove invited user from invites
            user.invites = user.invites.filter(id => id != invited_id)
            if (user.type === ADVENTURER) {
                // add user to invited user companions
                invited_user.companions = [...invited_user.companions, user_id]
                if (invited_user.type === ADVENTURER) {
                    // add invited user to users companions
                    user.companions = [...user.companions, invited_id]
                }
                else if (invited_user.type === GUILD) {
                    // add invited user to users guilds
                    user.guilds = [...user.guilds, invited_id]
                }
            }
            else if (user.type === GUILD) {
                user.companions = [...user.companions, invited_id]
                invited_user.guilds = [...invited_user.guilds, invited_id]
            }

            user.save()
        }
        // send invite to invited user
        else {
            invited_user.invites = [...invited_user.invites, user_id]
        }

        invited_user.save()

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
            throw 'invited user not found'
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