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

      const updates = {};
      if (userData.name !== undefined) updates.name = userData.name;
      if (userData.username !== undefined) updates.username = userData.username;
      if (userData.email !== undefined) updates.email = userData.email;
      if (userData.password !== undefined) {
        const isSamePassword = await bcrypt.compare(userData.password, user.password);
        if (isSamePassword) {
          throw new Error('The new password must be different from the old one');
        }
        updates.password = await bcrypt.hash(userData.password, 10);
      }
      if (userData.bio !== undefined) updates.bio = userData.bio;
      if (userData.company !== undefined) updates.company = userData.company;
      if (userData.jobTitle !== undefined) updates.jobTitle = userData.jobTitle;
      if (userData.experienceLevel !== undefined) updates.experienceLevel = userData.experienceLevel;
      if (userData.profilePicture !== undefined) updates.profilePicture = userData.profilePicture;
      if (userData.coverPicture !== undefined) updates.coverPicture = userData.coverPicture;

      await user.update(updates);
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