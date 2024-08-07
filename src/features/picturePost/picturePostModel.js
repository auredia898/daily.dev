const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Picture = sequelize.define('Picture', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  postId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  tableName: 'picture',
  timestamps: true,
  updatedAt: 'updateTimestamp',
});

module.exports = Picture;
