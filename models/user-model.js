const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName: String, 
    email: String, 
    password: String,
    contact:{
        type:"String",
        default: ""
    },
    profilePicture: String,
    cart : {
        type: Array,
        default: []
    },
    orders: {
        type: Array, 
        default: [],
    },
});

module.exports =  mongoose.model('User', userSchema);