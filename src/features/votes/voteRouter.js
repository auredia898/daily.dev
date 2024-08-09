const express = require('express');
const voteController = require('./voteController');
const { verifyToken, verifyRole} = require('../../middleware/authMiddleware');

const voteRouter = express.Router();


voteRouter.post('/upvote',verifyToken,  voteController.upvote);
voteRouter.post('/downvote',verifyToken,  voteController.downvote);
voteRouter.get('/:id', voteController.getVotesById)
voteRouter.get('/by-post/:postId', voteController.getVotesByPostId)
voteRouter.get('/by-comment/:commentId', voteController.getVotesByCommentId)
voteRouter.get('/', voteController.getAllVotes)
voteRouter.delete('/:id', voteController.deleteVote)

module.exports = voteRouter;