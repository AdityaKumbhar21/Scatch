const express = require('express');
const upload = require('../config/multer-config');
const productModel = require('../models/product-model');
const router = express.Router();
const {adminCheck} = require('../middlewares/adminCheck');
const { isLoggedIn } = require('../middlewares/isLoggedIn');



router.get('/create',isLoggedIn, adminCheck, (req, res)=>{
    const success = req.flash("success");
    res.render("createproducts", {success});
});

router.post('/create',isLoggedIn, adminCheck, upload.single('image'), async(req, res)=>{
   try {
     const{ name, price, discount, bgcolor, panelColor, textColor} = req.body;
     const product = await productModel.create({
         image: req.file.buffer,
         name, 
         price, 
         discount, 
         bgcolor, 
         panelColor, 
         textColor
     });
 
     req.flash("success", "Product created successfully!");
     res.redirect('/owners/admin'); 
   } catch (error) {
        req.flash("success", "Something went wrong!");
        res.redirect('/owners/admin');
   }
});




module.exports = router;