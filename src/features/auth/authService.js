const bcrypt = require('bcryptjs')
const { User } = require('../../utils/index')
const jwt = require('jsonwebtoken');
const generateUsername = require('../../utils/usernameGenerator');

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

}

module.exports = new AuthService();

