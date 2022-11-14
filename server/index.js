const express = require('express')
const failQuestsScheduler = require('./services/failQuestsScheduler')

require('dotenv').config()
require('./config/db.config')

const app = express()

app.use(express.json())

// schedulers
failQuestsScheduler

// routes
const authRouter = require('./routes/auth.routes')

app.use('/auth', authRouter)

const questsRouter = require('./routes/quests.routes')

app.use('/quests', questsRouter)

const adventuresRouter = require('./routes/adventures.routes')

app.use('/adventures', adventuresRouter)

app.listen(process.env.PORT, (err) => {
    if(err)
        throw err
    console.log(`server running on port ${process.env.PORT}`)
})