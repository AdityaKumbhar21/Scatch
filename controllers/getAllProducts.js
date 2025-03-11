const productModel = require("../models/product-model");



module.exports.getAllProducts = async(req, res)=>{
    const products = await productModel.find();
    res.render('shop', {products});
}