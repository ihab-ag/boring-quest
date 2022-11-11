const express = require('express')

const app = express()

app.use(express.json())

app.listen(8000, (err)=>{
    if(err)
        console.log(err.message)
    else
        console.log('app is up and running')
})