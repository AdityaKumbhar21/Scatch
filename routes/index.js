const express = require('express');
const { isLoggedIn } = require('../middlewares/isLoggedIn');
const { adminCheck } = require('../middlewares/adminCheck');
const router = express.Router();



router.get('/',(req, res)=>{
    res.render('index', {error: null});
});


router.get('/shop', isLoggedIn, (req, res)=>{
    res.render('shop');
})


router.get('/admin',isLoggedIn, adminCheck, (req, res)=>{
    res.render('admin')
});

module.exports = router;