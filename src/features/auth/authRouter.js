const express = require('express')
const authController = require('./authController');
const { verifyToken } = require('../../middleware/authMiddleware');

const authRouter = express.Router()

authRouter.post('/register', authController.register);
authRouter.post('/login',authController.login);
authRouter.post('/send-otp', authController.sendOTP);
authRouter.post('/verify-otp', authController.verifyOTP);
authRouter.post('/forgot-password', authController.forgotPassword);
authRouter.post('/change-password', verifyToken, authController.changePassword)

module.exports = authRouter; 