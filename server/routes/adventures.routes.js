const { Router } = require('express')
const { createAdventure } = require('../controllers/adventures.controller')
const authMiddleware = require('../middleware/auth.middleware')

const router = Router()

router.post('/', authMiddleware, createAdventure)

module.exports = router