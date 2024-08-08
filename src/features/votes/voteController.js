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

    async getAllComments(req, res){
        try{
            const comments = await CommentService.getAllComments();
            res.status(200).json(comments);
        }catch(error){
            res.status(500).json({ message: error.message})
        }
    }

    async getCommentById(req, res){
        try{
            const { id } = req.params;
            const comment = await CommentService.getCommentById(id);
            res.status(200).json(comment);
        }catch(error){
            res.status(404).json({ message: error.message})
        }
    }

    async getCommentByPostId(req, res) {
        try {
            const { postId } = req.params;
            const comments = await CommentService.getCommentByPostId(postId);
            res.status(200).json(comments);
        } catch (error) {
            console.log(error);
            res.status(404).json({ message: error.message });
        }
    }

    async getCommentByCommentId(req, res) {
        try {
            const { commentId } = req.params;
            const comments = await CommentService.getCommentByCommentId(commentId);
            res.status(200).json(comments);
        } catch (error) {
            console.log(error);
            res.status(404).json({ message: error.message });
        }
    }

    async updateComment(req, res) {
        try {
            const { id } = req.params;
            const { message } = req.body;

            const commentData = {
                message,
                picture: req.file? req.file.path : null, 
            }
            
            const updatedComment = await CommentService.updateComment(id, commentData);
            res.status(200).json({ message: 'Comment updated successfully!', updatedComment });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    }

}

module.exports = new CommentController();