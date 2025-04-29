const mongoose = require('mongoose')

const UsersSchema=new mongoose.Schema({
    name:String,
    password:String,
    email:String,
    phone:String
})

module.exports=mongoose.model('users',UsersSchema)

