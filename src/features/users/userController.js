const UserService = require('./userService');

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getUserByUserId(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getUserByUserId(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const id = req.user.userId;
      const { name, username, email, password, bio, company, jobTitle, experienceLevel } = req.body;

      // Gestion des images
      const profilePicture = req.files['profilePicture'] ? req.files['profilePicture'][0].path : null;
      const coverPicture = req.files['coverPicture'] ? req.files['coverPicture'][0].path : null;

      const userData = {
        name,
        username,
        email,
        password,
        bio,
        company,
        jobTitle,
        experienceLevel,
        profilePicture,
        coverPicture
      };

      const updatedUser = await UserService.updateUser(id, userData);
      res.status(200).json({ message: 'User updated successfully!', user: updatedUser });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.deleteUser(id);
      res.send({message: 'user deleted successfully!', user})
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async getProfile(req, res) {
    try {
      const id = req.user.userId; 
      const profile = await UserService.getProfile(id);
      res.status(200).json(profile);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new UserController();