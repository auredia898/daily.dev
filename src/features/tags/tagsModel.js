const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Tag = sequelize.define('Tag', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'tags',
  timestamps: true,
  updatedAt: 'updateTimestamp',
});

module.exports = Tag;
