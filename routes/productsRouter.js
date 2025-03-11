const express = require('express');
const upload = require('../config/multer-config');
const productModel = require('../models/product-model');
const router = express.Router();
const {adminCheck} = require('../middlewares/adminCheck');
const { isLoggedIn } = require('../middlewares/isLoggedIn');
const { createProduct } = require('../controllers/createProduct');



router.get('/create',isLoggedIn, adminCheck, (req, res)=>{
    const success = req.flash("success");
    res.render("createproducts", {success});
});

router.post('/create',isLoggedIn, adminCheck, upload.single('image'), createProduct);




module.exports = router;