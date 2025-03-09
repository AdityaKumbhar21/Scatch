const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName: String, 
    email: String, 
    password: String,
    isadmin: Boolean,
    contact: Number,
    profilePicture: String,
    cart : [],
    orders: []
});

module.exports =  mongoose.model('User', userSchema);