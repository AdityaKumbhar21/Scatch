const express = require('express');
const router = express.Router();
const {registerUser, loginUser, logoutUser} = require('../controllers/authController');
const validateUser = require('../middlewares/validationMiddleware');
const userModel = require('../models/user-model');
const { isLoggedIn } = require('../middlewares/isLoggedIn');



router.get('/',(req, res)=>{
    res.send("hey");
});

router.post('/register',validateUser, registerUser);

router.post('/login', validateUser, loginUser);

router.get('/logout', isLoggedIn, logoutUser );

module.exports = router;