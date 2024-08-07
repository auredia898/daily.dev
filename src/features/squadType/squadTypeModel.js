const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const SquadType = sequelize.define('SquadType', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'squadType',
  timestamps: true,
  updatedAt: 'updateTimestamp',
});

module.exports = SquadType;