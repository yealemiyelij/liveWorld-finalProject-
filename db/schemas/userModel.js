
'use strict';
var mongoose = require('mongoose'),
    bcrypt= require('bcrypt'),
    Schema= mongoose.Schema;

var UserSchema = new Schema ({
    firstname: {
        type:String,
        trim: true,
        required: true
    },
    lastname:{
        type: String,
        trim: true,
        required: true
    },
    username: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    hash_password:{
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    image: {type: String},
    date: {
        type: Date,
        default: Date.now
     },
});

UserSchema.methods.comparePassword= function(password){
    return bcrypt.compareSync(password, this.hash_password);
};

mongoose.model('User', UserSchema);
