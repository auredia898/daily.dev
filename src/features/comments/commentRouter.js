const express = require('express');
const commentController = require('./commentController');
const {uploadComment} = require('../../middleware/muter')

const commentRouter = express.Router();


commentRouter.post('/for-comment', uploadComment.single('picture'), commentController.createCommentForComment);
commentRouter.post('/for-post', uploadComment.single('picture'), commentController.createCommentForPost);

module.exports = commentRouter;