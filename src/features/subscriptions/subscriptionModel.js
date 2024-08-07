const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Subscription = sequelize.define('Subscription', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  tableName: 'subscriptions',
  timestamps: true,
  updatedAt: 'updateTimestamp',
});

module.exports = Subscription;
