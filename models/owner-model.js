const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullName: String, 
    email: String, 
    password: String,
    gstin: String,
    products: {
        type: Array,
        default: [],
    },
    profilePic: String,
});

module.exports =  mongoose.model('Owner', ownerSchema);