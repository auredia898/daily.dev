const express = require('express')
const authController = require('./authController');

const authRouter = express.Router()

authRouter.post('/register', authController.register);
authRouter.post('/login',authController.login);
authRouter.post('/send-otp', authController.sendOTP);
authRouter.post('/verify-otp', authController.verifyOTP);

module.exports = authRouter; 