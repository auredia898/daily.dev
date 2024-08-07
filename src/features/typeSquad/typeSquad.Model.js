const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const TypeSquad = sequelize.define('TypeSquad', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
  tableName: 'typeSquad',
  timestamps: true,
  updatedAt: 'updateTimestamp' 

});

module.exports = TypeSquad;
