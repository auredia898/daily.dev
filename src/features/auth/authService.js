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

        const finalUsername = username ||  await generateUsername(name);

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

        const otpToken = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '5m' });
        return otpToken;
    }

    async forgotPassword(email, newPassword) {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new Error('User not found');
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();
    }

    async changePassword(userId, oldPassword, newPassword) {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid current password');
        }

        const isSamePassword = await bcrypt.compare(newPassword, user.password);
        if (isSamePassword) {
            throw new Error('New password cannot be the same as the old password');
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        return user;
    }
}

module.exports = new AuthService();

