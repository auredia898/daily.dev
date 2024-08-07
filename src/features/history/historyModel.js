const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const History = sequelize.define('History', {
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  postId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'history',
  timestamps: false,
});

module.exports = History;
