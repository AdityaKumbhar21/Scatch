const express = require('express');
const { isLoggedIn } = require('../middlewares/isLoggedIn');
const { adminCheck } = require('../middlewares/adminCheck');
const { getAllProducts } = require('../controllers/getAllProducts');
const productModel = require('../models/product-model');
const userModel = require('../models/user-model');
const { addToCart } = require('../controllers/addToCart');
const { getCart } = require('../controllers/getCart');
const router = express.Router();



router.get('/',(req, res)=>{
    
    res.render('index', {error: null, loggedIn: false});
});


router.get('/shop', isLoggedIn,getAllProducts)


router.get('/admin',isLoggedIn, adminCheck, async (req, res)=>{
    const products = await productModel.find();
    res.render('admin', {products})
});

router.get('/cart', isLoggedIn, getCart)

router.get('/addtocart/:id', isLoggedIn, addToCart)

module.exports = router;