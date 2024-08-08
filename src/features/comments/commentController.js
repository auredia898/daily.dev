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

            const newComment = await SquadService.createSquad(commentData);
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
                commentId,
                message,
                picture: req.file? req.file.path : null, 
                userId
            }

            const newComment = await SquadService.createSquad(commentData);
            res.status(201).json({message: 'Comment created successfully', newComment})
        }catch(error){
            console.log(error);
            res.status(500).json({ message: error.message })
        }
    }
}

module.exports = new CommentController();