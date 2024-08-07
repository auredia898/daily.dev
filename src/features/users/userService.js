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

  async updateStudent(userId, studentData) {
    const student = await Student.findOne({ where: { userId } });
    if (!student) {
      throw new Error('Student not found');
    }

    const user = await User.findOne({ where: { id: userId } });
    if (studentData.email || studentData.password) {
      if (studentData.email) user.email = studentData.email;
      if (studentData.password) {
        user.password = await bcrypt.hash(studentData.password, 10);
      }
      await user.save();
    }

    await student.update(studentData);
    return { student, user };
  }

  async deleteStudent(userId) {
    const student = await Student.findOne({ where: { userId } });
    if (!student) {
      throw new Error('Student not found');
    }
    const user = await User.findOne({ where: { id: userId } });
    await student.destroy();
    await user.destroy();
    return student;
  }

  async getProfile(userId) {
    const student = await Student.findOne({
      where: { userId },
      include: [{ model: User, attributes: ['id', 'email', 'role'] }],
    });
    if (!student) {
      throw new Error('Student not found');
    }
    return student;
  }
  
}

module.exports = new UserService();