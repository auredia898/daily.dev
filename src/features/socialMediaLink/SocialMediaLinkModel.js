const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const SocialMediaLinks = sequelize.define('SocialMediaLinks', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  typeOfSocialMediaId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'socialMediaLinks',
  timestamps: true,
  updatedAt: 'updateTimestamp',
});

module.exports = SocialMediaLinks;
