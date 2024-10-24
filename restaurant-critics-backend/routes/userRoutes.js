const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();

router.post('/signup', (req, res, next) => {
    console.log('Signup route hit');
    next();
}, registerUser);

router.post('/login', (req, res, next) => {
    console.log('Login route hit');
    next();
}, loginUser);

module.exports = router;
