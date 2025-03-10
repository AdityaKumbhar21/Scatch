const userModel = require("../models/user-model")

module.exports.adminCheck = async (req, res, next)=>{
    try {
        const user = await userModel.findOne({email: req.user.email}).select("-password");
    
        if(!user || !user.isAdmin){
           return  res.status(401).send("401: Access Denied");
        }
        next();
    } catch (error) {
        console.log(error);
        res.send("505: Internal Server Error");
    }

}