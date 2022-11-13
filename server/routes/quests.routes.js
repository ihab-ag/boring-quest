const { Router } = require('express')
const { createQuest, submitQuest } = require('../controllers/quests.controller')
const authMiddleware = require('../middleware/auth.middleware')

const router = Router()

router.post('/',authMiddleware, createQuest)

router.put('/submit/:quest_id',authMiddleware, submitQuest)

module.exports = router