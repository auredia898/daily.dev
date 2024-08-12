const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const HidePost = sequelize.define('HidePost', {
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
}, {
  tableName: 'hidePost',
  timestamps: false,
});

module.exports = HidePost;
