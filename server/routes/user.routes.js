const { Router } = require('express')
const { sendOrAcceptInvite, deleteFriend, searchUsers } = require('../controllers/user.controller')
const authMiddleware = require('../middleware/auth.middleware')

const router = Router()

router.post('/invites/:invited_id', authMiddleware, sendOrAcceptInvite)

router.delete('/friends/:deleted_id', authMiddleware, deleteFriend)

router.get('/search/:username', authMiddleware, searchUsers)

module.exports = router