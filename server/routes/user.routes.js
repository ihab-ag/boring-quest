const { Router } = require('express')
const { sendOrAcceptInvite, deleteFriend } = require('../controllers/user.controller')
const authMiddleware = require('../middleware/auth.middleware')

const router = Router()

router.post('/invites/:invited_id', authMiddleware, sendOrAcceptInvite)

router.delete('/companions/:invited_id', authMiddleware, deleteFriend)

module.exports = router