const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Vote = sequelize.define('Vote', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  typeVote: {
    type: DataTypes.ENUM('upvote', 'downvote'),
    allowNull: false,
  },
  postId: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  commentId: {
    type: DataTypes.UUID,
    allowNull: true,
  },
}, {
  tableName: 'votes',
  timestamps: true,
  updatedAt: 'updateTimestamp',
});

module.exports = Vote;
