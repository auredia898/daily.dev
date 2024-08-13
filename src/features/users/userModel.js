const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
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
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  coverPicture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  experienceLevel:{
    type: DataTypes.ENUM('Aspiring engenieer (<1 year)', 'Entry-level (1 year)', 'Mid-level(2-3 years)', 
                         'Experienced (4-5 years)', 'Highly experienced (6-10 years)', 
                         'I\'ve suffered enough (10+ years)', 'I\'m not an engineer'
                        ),
    allowNull: true,
  },
  userRole: {
    type: DataTypes.ENUM('user', 'admin'),
    defaultValue: 'user',
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  reputation: {
    type: DataTypes.INTEGER,
    defaultValue: 10
  },
  views: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  readme: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  jobTitle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  otp: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'users',
  timestamps: true,
  updatedAt: 'updateTimestamp',
});

module.exports = User;
