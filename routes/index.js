const express = require('express');
const { isLoggedIn } = require('../middlewares/isLoggedIn');
const { adminCheck } = require('../middlewares/adminCheck');
const { getAllProducts } = require('../controllers/getAllProducts');
const productModel = require('../models/product-model');
const router = express.Router();



router.get('/',(req, res)=>{
    res.render('index', {error: null});
});


router.get('/shop', isLoggedIn,getAllProducts)


router.get('/admin',isLoggedIn, adminCheck, async (req, res)=>{
    const products = await productModel.find();
    res.render('admin', {products})
});

module.exports = router;