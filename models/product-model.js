const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String, 
    image: Buffer, 
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: {
        type: String,
        default: "#FFFFFF"
    },
    panelColor: {
        type: String,
        default: "#FFFFFF"
    },
    textColor: {
        type: String,
        default: "#FFFFFF"
    },
});

module.exports =  mongoose.model('Product', productSchema);