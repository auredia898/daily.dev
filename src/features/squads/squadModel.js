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

  squadHandle: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  views: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 0
  },

  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  publicSquad: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },

  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },

  picture: {
    type: DataTypes.STRING,
    allowNull: true,
  },

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
