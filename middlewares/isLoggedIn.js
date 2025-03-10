const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');

module.exports.isLoggedIn = (req, res, next)=>{
    if(!req.cookies.token){
        req.flash("error", "You need to login first to access the page");
        return res.redirect('/')
    }

    try {
        jwt.verify(req.cookies.token, process.env.JWT_KEY,async function(err, decoded) {
                if(err){
                    req.flash("error", "Something went wrong");
                    return res.redirect('/')
                }

                const user =await  userModel
                .findOne({email: decoded.email})
                .select("-password")

                req.user = user;
                next();
          });

    } catch (error) {
        req.flash("error", "Something went wrong");
        res.redirect('/')
    }

}