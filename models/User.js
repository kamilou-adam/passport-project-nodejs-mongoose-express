const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    date: {
        type:Date,
        default: Date.now
    }


});

//Export the model
const User = mongoose.model('User',UserSchema)
module.exports = User;