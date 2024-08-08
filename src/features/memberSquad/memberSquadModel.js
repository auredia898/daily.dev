const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const MemberSquad = sequelize.define('MemberSquad', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  squadId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  memberRole: {
    type: DataTypes.ENUM('admin', 'moderator', 'simple'),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'memberSquad',
  timestamps: false,
});

module.exports = MemberSquad;
