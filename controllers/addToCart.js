const userModel = require("../models/user-model");



module.exports.addToCart  = async (req, res)=>{
    try {
        const user = await userModel.findOne({email: req.user.email});
        if(user){
            user.cart.push(req.params.id);
            user.save();
            req.flash("success", "Product successfully added to cart");
            return res.redirect('/shop');
        }

        req.flash("success", "Something went wrong!");
        return res.redirect('/shop');


    } catch (error) {
        req.flash("success", "Internal server issue!");
        return res.redirect('/shop');
    }
    
}