const bcrypt = require('bcrypt');
const userModel = require('../models/user-model');
const genToken = require('../utils/generateToken');

module.exports.registerUser = async (req, res)=>{
    try {
        const{fullname, email, password} = req.body;
        const user = await  userModel.findOne({email});
        if(user){
            // redirect and send the error as user already exist
            const error = "User with email already exist";
            return res.render('index',{error});
        }
        bcrypt.hash(password, 12, async function(err, hash) {
            if(err){
                return res.render('index', {error: "Error creating user try again later"});
            }
            const createdUser = await userModel.create({
                fullname,
                email,
                password: hash,
            });
            const token = genToken(createdUser);
            res.cookie('token', token);
            res.redirect('/shop');

        });
    } catch (error) {
        res.render('index', {error: "Internal Server Issue"});  
    }
}


module.exports.loginUser =  async(req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            const error = "No user with the email found";
            return res.render('index', {error});
        }

        bcrypt.compare(password, user.password, function(err, result) {
            if(err){
                const error = "Internal Server Error! Please try again later";
                return res.render('index', {error});
            }

            if(result){
                if(user.isAdmin){
                    const token = genToken(user);
                    res.cookie('token', token);
                    res.redirect('/admin')
                }
                const token = genToken(user);
                res.cookie('token', token);
                res.redirect('/shop')
            }
            else{
                const error = "Incorrect Password";
                return res.render('index', {error});
            }
        });
        

    } catch (err) {
        const error = "Internal Server Error! Please try again later";
        res.render('index', {error});
    }
}

module.exports.logoutUser = (req, res)=>{
    res.cookie('token', "");
    res.redirect('/');
}