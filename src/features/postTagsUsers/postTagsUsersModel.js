const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const PostsTagsUsers = sequelize.define('PostsTagsUsers', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  postId: {
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
  tableName: 'postsTagsUsers',
  timestamps: false,
});

module.exports = PostsTagsUsers;
