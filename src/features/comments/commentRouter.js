const express = require('express');
const commentController = require('./commentController');
const {uploadComment} = require('../../middleware/muter')
const { verifyToken, verifyRole} = require('../../middleware/authMiddleware');

const commentRouter = express.Router();


commentRouter.post('/for-comment',verifyToken, uploadComment.single('picture'), commentController.createCommentForComment);
commentRouter.post('/for-post',verifyToken, uploadComment.single('picture'), commentController.createCommentForPost);
commentRouter.put('/:id',  uploadComment.single('picture'), commentController.updateComment)
commentRouter.get('/:id', commentController.getCommentById)
commentRouter.get('/by-post/:postId', commentController.getCommentByPostId)
commentRouter.get('/by-comment/:commentId', commentController.getCommentByCommentId)
commentRouter.get('/', commentController.getAllComments)
commentRouter.delete('/:id', commentController.deleteComment)

module.exports = commentRouter;