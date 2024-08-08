const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  thumbnail: { 
    type: DataTypes.STRING,
    allowNull: true,
  },
  content:{
    type: DataTypes.TEXT,
    allowNull: false,
  },
  title:{
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  picture :  {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  squadId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'posts',
  timestamps: false,
});

module.exports = Post;
