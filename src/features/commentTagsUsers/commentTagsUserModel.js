const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const CommentTagsUsers = sequelize.define('CommentTagsUsers', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  commentId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'commentTagsUsers',
  timestamps: false,
});

module.exports = CommentTagsUsers;
