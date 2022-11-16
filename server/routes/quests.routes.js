const { Router } = require('express')
const { createQuest, submitQuest } = require('../controllers/quests.controller')
const adventurerMiddleware = require('../middleware/adventurer.middleware')
const authMiddleware = require('../middleware/auth.middleware')

const router = Router()

router.post('/',authMiddleware, createQuest)

router.put('/submit/:quest_id',authMiddleware,adventurerMiddleware, submitQuest)

module.exports = router