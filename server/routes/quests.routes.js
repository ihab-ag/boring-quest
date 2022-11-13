const { Router } = require('express')
const { createQuest } = require('../controllers/quests.controller')
const authMiddleware = require('../middleware/auth.middleware')

const router = Router()

router.post('/',authMiddleware, createQuest)

module.exports = router