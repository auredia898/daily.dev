const AuthService = require('./authService');
const {authSchema} = require('../../validators/authValidator')
const jwt = require('jsonwebtoken');

class AuthController {

    async register(req, res) {
        try {
                 
          const validatedData = await authSchema.validateAsync(req.body, { abortEarly: false });

          const { name, username, email, password, experienceLevel} = validatedData;

          const userData = { name, username, email, password, experienceLevel };

          const newUser  = await AuthService.register(userData);
    
          res.status(201).json({ user: newUser });
        } catch (error) {
            if (error.isJoi) {
              const errorMessage = error.details.map((detail) => detail.message).join('; ');
              res.status(400).json({ error: errorMessage });
            } else {
                res.status(500).json({ error: error.message });
            }    
        }
    }
    
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const { token, user } = await AuthService.login(email, password);

      res.status(200).json({ token, user })
    } catch (error) {
        res.status(401).json({error: 'Authentication failed!'})
    }
  }
   

  async sendOTP(req, res) {
    try {
        const { email } = req.body;
        await AuthService.sendOTP(email);
        res.status(200).json({ success: true, message: 'OTP sent successfully' });
    } catch (error) {
        console.error('Error sending OTP:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }


    async verifyOTP(req, res) {
        try {
            const { email, otp } = req.body;
            const otpToken = await AuthService.verifyOTP(email, otp);
            res.status(200).json({ success: true, message: 'OTP verified successfully', otpToken });
        } catch (error) {
            console.error('Error verifying OTP:', error);
            res.status(400).json({ success: false, error: error.message });
        }
    }


    async forgotPassword(req, res) {
        try {
            const { email, otpToken, newPassword } = req.body;
            const decoded = jwt.verify(otpToken, process.env.SECRET_KEY);

            if (decoded.email !== email) {
                throw new Error('Invalid token');
            }

            await AuthService.changePassword(email, newPassword);

            res.status(200).json({ success: true, message: 'Password changed successfully' });
        } catch (error) {
            console.error('Error changing password:', error);
            res.status(400).json({ success: false, error: error.message });
        }
    }

    async changePassword(req, res) {
        try {
            const { oldPassword, newPassword } = req.body;
            const userId = req.user.userId;

            const updatedUser = await AuthService.changePassword(userId, oldPassword, newPassword);

            res.status(200).json({ success: true, message: 'Password changed successfully', user: updatedUser });
        } catch (error) {
            console.error('Error changing password:', error);
            res.status(400).json({ success: false, error: error.message });
        }
    }
}

module.exports = new AuthController();