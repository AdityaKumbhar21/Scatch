const userModel = require("../models/user-model");



module.exports.getCart = async (req, res)=>{
    try {
        const user = await userModel.findOne({email:req.user.email}).populate("cart");
        if(user){
            const cart = user.cart;
            let totalMrp = 0; let totalDiscount = 0; totalAmount = 0;
            const platformFee = 20;
            cart.forEach((cartP)=>{
                totalMrp += Number(cartP.price);
                totalDiscount += Number(cartP.discount);
                totalAmount += Number(cartP.finalPrice === 0 ? cartP.price : cartP.finalPrice);
            });
    
            totalAmount += platformFee;
            return res.render('cart', {cart, totalMrp, totalDiscount, totalAmount, platformFee});
        }
            req.flash("success", "Something went wrong");
            res.redirect('/shop');  
    } catch (error) {
            req.flash("success", "Something went wrong");
            res.redirect('/shop');
    }
}