const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: true,
})
.then(() => {
    console.log("database connected")
})
.catch((error) => {
    console.log(`database error: ${error}`)
})