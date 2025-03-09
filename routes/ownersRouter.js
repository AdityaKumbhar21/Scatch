const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');


//  checking if the env is development
if(process.env.NODE_ENV === "development"){
    router.post('/create',async (req, res)=>{
        const owner =  await ownerModel.find();
        if(owner.length > 0){
            return res.status(502).send("You cannot create a owner");
        }
        const {fullname, email, password} = req.body;
        const createdOwner = await ownerModel.create({
            fullname,
            email,
            password
        });
        res.status(201).send(createdOwner);
    });
}

router.get('/',(req, res)=>{
    res.send("hey");
});




module.exports = router;