const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        min : 5,
        required: true,
        unique : true
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        min : 5,
        required : true
    },

    isAdmin : {
        type : Boolean,
        default : false
    },

}, {timestamps : true})


module.exports = mongoose.model("User", userSchema)