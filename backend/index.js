const { json } = require('express')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()



app.use(express.json())


// start DB connection

const start = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB connected")
    }
    catch(err){
        console.log("DB is not connected")
    }
}

start()

app.listen(8084, ()=>console.log("server is listening on 8084"))