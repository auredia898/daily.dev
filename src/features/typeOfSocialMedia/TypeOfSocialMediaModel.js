const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const TypeOfSocialMedia = sequelize.define('TypeOfSocialMedia', {
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
  tableName: 'typeOfSocialMedia',
  timestamps: true,
  updatedAt: 'updateTimestamp',
});

module.exports = TypeOfSocialMedia;
