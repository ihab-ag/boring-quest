const { Router } = require('express')
const { signUp, login } = require('../controllers/auth.controller')

const router = Router()

router.post('/signup', signUp)

router.post('/login', login)

module.exports = router