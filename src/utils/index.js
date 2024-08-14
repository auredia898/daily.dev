const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('../features/users/userModel');
const TypeOfSocialMedia = require('../features/typeOfSocialMedia/TypeOfSocialMediaModel');
const SocialMediaLinks = require('../features/socialMediaLink/SocialMediaLinkModel');
const SquadType = require('../features/squadType/squadTypeModel');
const Squad = require('../features/squads/squadModel');
const MemberSquad = require('../features/memberSquad/memberSquadModel');
const Post = require('../features/posts/postModel');
const HidePost = require('../features/hidePost/hidePostModel');
const Tag = require('../features/tags/tagsModel');
const PostTag = require('../features/postTags/postTagsModel');
const Bookmark = require('../features/bookmarks/bookmarksModel');
const Comment = require('../features/comments/commentModel');
const Vote = require('../features/votes/voteModel');
const CommentTagsUsers = require('../features/commentTagsUsers/commentTagsUserModel');
const PostsTagsUsers = require('../features/postTagsUsers/postTagsUsersModel');
const History = require('../features/history/historyModel');
const Subscription = require('../features/subscriptions/subscriptionModel');
const { FORCE } = require('sequelize/lib/index-hints');
// const Notification = require('./Notification');

// Relations

// User and SocialMediaLinks
User.hasMany(SocialMediaLinks, { foreignKey: 'userId' });
SocialMediaLinks.belongsTo(User, { foreignKey: 'userId' });

// SocialMediaLinks and TypeOfSocialMedia
SocialMediaLinks.belongsTo(TypeOfSocialMedia, { foreignKey: 'typeOfSocialMedia' });

// Squad and SquadType
Squad.belongsTo(SquadType, { foreignKey: 'squadTypeId' });
SquadType.hasMany(Squad, { foreignKey: 'squadTypeId', onDelete: 'CASCADE'});

// User and MemberSquad
User.belongsToMany(Squad, { through: MemberSquad, foreignKey: 'userId',  otherKey: 'squadId'  });
Squad.belongsToMany(User, { through: MemberSquad, foreignKey: 'squadId',  otherKey: 'userId' });

// Post and User
User.hasMany(Post, { foreignKey: 'userId' })
Post.belongsTo(User, { foreignKey: 'userId' });

// Post and Squad
Squad.hasMany(Post, { foreignKey: 'squadId' });
Post.belongsTo(Squad, { foreignKey: 'squadId' });


// User and HidePost
User.belongsToMany(Post, { through: HidePost, foreignKey: 'userId' });
Post.belongsToMany(User, { through: HidePost, foreignKey: 'postId' });

// Post and Tag
Post.belongsToMany(Tag, { through: PostTag, foreignKey: 'postId' });
Tag.belongsToMany(Post, { through: PostTag, foreignKey: 'tagId' });
PostTag.belongsTo(Tag, { foreignKey: 'tagId'});


// User and Bookmark
User.belongsToMany(Post, { through: Bookmark, foreignKey: 'userId', otherKey: 'postId' });
Post.belongsToMany(User, { through: Bookmark, foreignKey: 'postId', otherKey: 'userId' });

// User and Comment
User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });

// Post and Comment
Post.hasMany(Comment, { foreignKey: 'postId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

// Comment and Comment (parent comment)
Comment.hasMany(Comment, { foreignKey: 'parentCommentId', as: 'replies' });
Comment.belongsTo(Comment, { foreignKey: 'parentCommentId', as: 'parent' });

// User and Vote
User.hasMany(Vote, { foreignKey: 'userId' });
Vote.belongsTo(User, { foreignKey: 'userId' });

// Post and Vote
Post.hasMany(Vote, { foreignKey: 'postId' });
Vote.belongsTo(Post, { foreignKey: 'postId' });

// Comment and Vote
Comment.hasMany(Vote, { foreignKey: 'commentId' });
Vote.belongsTo(Comment, { foreignKey: 'commentId' });

// User and Notification
// User.hasMany(Notification, { foreignKey: 'userId' });
// Notification.belongsTo(User, { foreignKey: 'userId' });

// Comment and CommentTagsUsers
Comment.hasMany(CommentTagsUsers, { foreignKey: 'commentId' });
CommentTagsUsers.belongsTo(Comment, { foreignKey: 'commentId' });

// User and CommentTagsUsers
User.hasMany(CommentTagsUsers, { foreignKey: 'userId' });
CommentTagsUsers.belongsTo(User, { foreignKey: 'userId' });

// Post and PostsTagsUsers
Post.hasMany(PostsTagsUsers, { foreignKey: 'postId' });
PostsTagsUsers.belongsTo(Post, { foreignKey: 'postId' });

// User and PostsTagsUsers
User.hasMany(PostsTagsUsers, { foreignKey: 'userId' });
PostsTagsUsers.belongsTo(User, { foreignKey: 'userId' });

// User and History
User.hasMany(History, { foreignKey: 'userId' });
History.belongsTo(User, { foreignKey: 'userId' });

// Post and History
Post.hasMany(History, { foreignKey: 'postId' });
History.belongsTo(Post, { foreignKey: 'postId' });

// User and Subscription
User.hasMany(Subscription, { foreignKey: 'userId' });
Subscription.belongsTo(User, { foreignKey: 'userId' });



// Sync database
sequelize.sync({ alter: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports = {
  User,
  TypeOfSocialMedia,
  SocialMediaLinks,
  SquadType,
  Squad,
  MemberSquad,
  Post,
  HidePost,
  Tag,
  PostTag,
  Bookmark,
  Comment,
  Vote,
//   Notification,
  CommentTagsUsers,
  PostsTagsUsers,
  History,
  Subscription
};
