const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profilePicture: DataTypes.STRING,
  coverPicture: DataTypes.STRING,
  experienceLevel: DataTypes.STRING,
  userRole: {
    type: DataTypes.ENUM('user', 'admin', 'author'),
    allowNull: false,
  },
  bio: DataTypes.TEXT,
  reputation: DataTypes.INTEGER,
  views: DataTypes.INTEGER,
  readme: DataTypes.TEXT,
  company: DataTypes.STRING,
  jobTitle: DataTypes.STRING
}, {
  tableName: 'users',
  timestamps: true,
  updatedAt: 'updateTimestamp',
});

module.exports = User;
