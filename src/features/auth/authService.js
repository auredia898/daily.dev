const bcrypt = require('bcryptjs')
const { User } = require('../../utils/index')
const jwt = require('jsonwebtoken');
const generateUsername = require('../../utils/usernameGenerator');
const generateOTP = require('../../utils/otpGenerator');
const sendEmail = require('../../utils/sendEmail');

class AuthService {   

    async register(userData) {
        const { name, username, email, password, experienceLevel } = userData;
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const finalUsername = username || generateUsername(name);

        const newUser = await User.create({
            name,
            username: finalUsername, 
            email, 
            password: hashedPassword, 
            experienceLevel
        });
    
        return newUser;
    }


    async login(email, password) {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new Error('Authentication failed, user not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
        throw new Error('Authentication failed, Invalid password');
        }

        const token = jwt.sign({ userId: user.id , role: user.userRole }, process.env.SECRET_KEY, {
        expiresIn: '1h',
        });
        return { token, user };  
    }


    async sendOTP(email) {
        const otp = generateOTP();
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new Error('User not found');
        }

        user.otp = otp;
        await user.save();

        await sendEmail({
            to: email,
            subject: 'OTP',
            message: `<p>Your OTP to reset password is: <strong>${otp}</strong></p>`,
        });
    }

    async verifyOTP(email, otp) {
        const user = await User.findOne({ where: { email, otp } });
        if (!user) {
            throw new Error('Invalid OTP');
        }

        user.otp = null;
        await user.save();
    }
}

module.exports = new AuthService();

