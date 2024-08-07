const AuthService = require('./authService');
const {authSchema} = require('../../validators/authValidator')

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
                res.status(400).json({ error: error.message });
            }    
        }
    }
    
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const { token } = await AuthService.login(email, password);

      res.status(200).json({ token })
    } catch (error) {
        res.status(401).json({error: 'Authentication failed!'})
    }
  }
   
}

module.exports = new AuthController();