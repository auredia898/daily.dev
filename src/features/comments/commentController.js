const CommentService = require('./commentService');



class CommentController{

    async createCommentForPost (req, res){
        try{
            const { postId, message } = req.body
            const userId = req.user.userId; 
            
            const commentData = {
                postId,
                message,
                picture: req.file? req.file.path : null, 
                userId
            }

            const newComment = await CommentService.createCommentForPost(commentData);
            res.status(201).json({message: 'Comment created successfully', newComment})
        }catch(error){
            console.log(error);
            res.status(500).json({ message: error.message })
        }
    }

    async createCommentForComment (req, res){
        try{
            const { commentId, message } = req.body
            const userId = req.user.userId; 
            
            const commentData = {
                parentCommentId: commentId,
                message,
                picture: req.file? req.file.path : null, 
                userId
            }

            const newComment = await CommentService.createCommentForComment(commentData);
            res.status(201).json({message: 'Comment created successfully', newComment})
        }catch(error){
            console.log(error);
            res.status(500).json({ message: error.message })
        }
    }   

    async deleteComment(req, res){
        try{
            const { id } = req.params;
            const deleteComment= await CommentService.deleteComment(id)
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