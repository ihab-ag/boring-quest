const { Router } = require('express')
const { signUp } = require('../controllers/auth.controller')

const router = Router()

router.post('/signup', signUp)

module.exports = router