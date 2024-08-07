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
    allowNull: false,
  },
  parentCommentId: DataTypes.UUID,
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  picture: DataTypes.STRING,
}, {
  tableName: 'comments',
  timestamps: true,
  updatedAt: 'updateTimestamp',
});

module.exports = Comment;
