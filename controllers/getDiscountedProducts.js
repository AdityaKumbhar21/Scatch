const productModel = require("../models/product-model");



module.exports.getDiscountedProducts = async(req, res)=>{
    try {
        const products = await productModel.find({discount : {$gt:0}});
        const success = req.flash("success");
        res.render('shop', {products, success});
    } catch (error) {
        req.flash("success", "Internal Server Error");
        req.redirect('/shop');
    }
}