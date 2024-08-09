const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  postId: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  parentCommentId: {
    type: DataTypes.UUID,
    allowNull: true
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'comments',
  timestamps: true,
  updatedAt: 'updateTimestamp',
});

module.exports = Comment;
