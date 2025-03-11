const userModel = require("../models/user-model")

module.exports.adminCheck = async (req, res, next)=>{
    try {
        const user = await userModel.findOne({email: req.user.email}).select("-password");
    
        if(!user || !user.isAdmin){
           return  res.status(401).send("401: Access Denied");
        }
        next();
    } catch (error) {
        console.error("Admin check error:", error);
        
        if (!res.headersSent) {  // Check if response has already been sent
            return res.status(500).json({ error: "505: Internal Server Error" });
        }
    }

}