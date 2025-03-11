const express = require('express');
const router = express.Router();
const {registerUser, loginUser, logoutUser} = require('../controllers/authController');
const validateUser = require('../middlewares/validationMiddleware');
const { isLoggedIn } = require('../middlewares/isLoggedIn');
const { adminCheck } = require('../middlewares/adminCheck');



router.get('/',(req, res)=>{
    res.send("hey");
});

router.post('/register',validateUser, registerUser);
router.post('/login', validateUser, loginUser);
router.get('/logout', isLoggedIn, logoutUser );

module.exports = router;