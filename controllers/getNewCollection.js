const productModel = require("../models/product-model");



module.exports.getNewCollection = async(req, res)=>{
        try {
            const products = await productModel.find({}).sort({_id: -1}).limit(3);
            const success = req.flash("success");
            res.render('shop', {products, success});
        } catch (error) {
            req.flash("success", "Internal Server Error");
            req.redirect('/shop');
        }
}