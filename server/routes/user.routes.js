const { Router } = require('express')
const { sendOrAcceptInvite } = require('../controllers/user.controller')
const authMiddleware = require('../middleware/auth.middleware')

const router = Router()

router.post('/invites/:invited_id', authMiddleware, sendOrAcceptInvite)

module.exports = router