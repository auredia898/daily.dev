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

  async updateStudent(req, res) {
    try {
      const { userId } = req.params;
      const studentData = req.body;
      const { student, user } = await StudentService.updateStudent(userId, studentData);
      res.status(200).json({ student, user });
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