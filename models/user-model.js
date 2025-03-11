const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName: String, 
    email: String, 
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
    },
    contact:{
        type:"String",
        default: ""
    },
    profilePicture: String,
    cart : [{
        type: mongoose.Types.ObjectId,
        ref:'Product'
    }],
    orders: {
        type: Array, 
        default: [],
    },
});

module.exports =  mongoose.model('User', userSchema);