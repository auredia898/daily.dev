
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Squad = sequelize.define('Squad', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  squadHandle: DataTypes.STRING,
  description: DataTypes.STRING,
  public: DataTypes.BOOLEAN,
  active: DataTypes.BOOLEAN,
  picture: DataTypes.STRING,
  squadTypeId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  tableName: 'squad',
  timestamps: true,
  updatedAt: 'updateTimestamp',
});

module.exports = Squad;
