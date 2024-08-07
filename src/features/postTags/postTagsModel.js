const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const PostTag = sequelize.define('PostTag', {
  postId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  tagId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  tableName: 'postTags',
  timestamps: false,
});

module.exports = PostTag;
