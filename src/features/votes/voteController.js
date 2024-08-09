const VoteService = require('./voteService');



class CommentController{

    async upvote (req, res){
        try{
            const { postId, commentId } = req.body
            const userId = req.user.userId; 
            
            const voteData = {
                postId,
                commentId,
                userId
            }

            const newUpvote = await VoteService.upvote(voteData);
            res.status(201).json({message: 'upvote registered successfully', newUpvote})
        }catch(error){
            console.log(error);
            res.status(500).json({ message: error.message })
        }
    }

    async downvote (req, res){
        try{
            const { postId, commentId } = req.body
            const userId = req.user.userId; 
            
            const voteData = {
                postId,
                commentId,
                userId
            }

            const newDownvote = await VoteService.downvote(voteData);
            res.status(201).json({message: 'vote downvoted', newDownvote})

        }catch(error){
            console.log(error);
            res.status(500).json({ message: error.message })
        }
    }   

    async deleteVote(req, res){
        try{
            const { id } = req.params;
            const deleteVote= await VoteService.deleteComment(id)
            res.status(200).send({message: 'Comment deleted successfully!', deleteComment})
        }catch(error){
            res.status(404).json({ message: error.message})
        }
    }

    async getAllVotes(req, res){
        try{
            const votes = await VoteService.getAllVotes();
            res.status(200).json(votes);
        }catch(error){
            res.status(500).json({ message: error.message})
        }
    }

    async getVotesById(req, res){
        try{
            const { id } = req.params;
            const vote = await VoteService.getVoteById(id);
            res.status(200).json(vote);
        }catch(error){
            res.status(404).json({ message: error.message})
        }
    }

    async getVotesByPostId(req, res) {
        try {
            const { postId } = req.params;
            const votes = await VoteService.getVotesByPostId(postId);
            res.status(200).json(votes);
        } catch (error) {
            console.log(error);
            res.status(404).json({ message: error.message });
        }
    }

    async getVotesByCommentId(req, res) {
        try {
            const { commentId } = req.params;
            const votes = await VoteService.getVotesByCommentId(commentId);
            res.status(200).json(votes);
        } catch (error) {
            console.log(error);
            res.status(404).json({ message: error.message });
        }
    }

}

module.exports = new CommentController();