const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  thumbnail: DataTypes.STRING,
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: DataTypes.TEXT,
  description: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  picture :  {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  link: DataTypes.STRING,
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
