const {User } = require('../../utils/index');
const bcrypt = require('bcryptjs');

class UserService {

  async getAllUsers() {
    return await User.findAll();
  }

  async getUserByUserId(id) {
    const user = await User.findOne({
      where: { id },
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async updateUser(id, userData) {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }

    if (userData.password) {
      const isSamePassword = await bcrypt.compare(userData.password, user.password);
      if (isSamePassword) {
        throw new Error('The new password must be different from the old one');
      }
      userData.password = await bcrypt.hash(userData.password, 10);
    }

    // await user.update(userData);
    Object.assign(user, userData);
    await user.save();
    
    return user;
  }

  async deleteUser(id) {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    await user.destroy();
    return user;
  }

  async getProfile(id) {
    const user = await User.findOne({
      where: { id }
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
  
}

module.exports = new UserService();