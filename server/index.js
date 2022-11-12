const express = require('express')

require('dotenv').config()
require('./config/db.config')
const app = express()

app.use(express.json())

const authRouter = require('./routes/auth.routes')
app.use('/auth', authRouter)

app.listen(process.env.PORT, (err) => {
    if(err)
        throw err
    console.log(`server running on port ${process.env.PORT}`)
})