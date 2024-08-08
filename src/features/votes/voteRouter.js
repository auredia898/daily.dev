const express = require('express');
const voteController = require('./voteController');
const { verifyToken, verifyRole} = require('../../middleware/authMiddleware');

const voteRouter = express.Router();


voteRouter.post('/upvote',verifyToken,  voteController.upvote);
voteRouter.post('/downvote',verifyToken,  voteController.downvote);
// commentRouter.put('/:id',  uploadComment.single('picture'), commentController.updateComment)
// commentRouter.get('/:id', commentController.getCommentById)
// commentRouter.get('/by-post/:postId', commentController.getCommentByPostId)
// commentRouter.get('/by-comment/:commentId', commentController.getCommentByCommentId)
// commentRouter.get('/', commentController.getAllComments)
// commentRouter.delete('/:id', commentController.deleteComment)

module.exports = voteRouter;