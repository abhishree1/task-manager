const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
    name:{
        type: String,
        required: true,
        trim:true
    },
    age:{
        type: Number,
        validate(value){
            if(value<0){
                throw new Error("Age must be positive number.")
            }
        }
    },
    email:{
        type:String,
        lowercase:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Please enter valid email address.')
            }
        }
    },
    password:{
        type:String,
        required:true,
        min: 6,
        trim:true,
        validate(value){
            value = value.toLowerCase();
            if(value.includes('password')){
                throw new Error("Password cannot be password")
            }
        }
    }
})

module.exports= User;