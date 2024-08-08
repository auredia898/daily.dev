const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const PostTag = sequelize.define('PostTag', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
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
