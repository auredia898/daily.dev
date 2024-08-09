const { Comment , Post} = require('../../utils/index');

class CommentService{

    async createCommentForPost(commentData){

        const { postId } = commentData

        const post = await Post.findOne( { where: { id: postId } });

        if(!post){
            throw new Error('Post not found!');
        }

        const newComment = await Comment.create(commentData);

        return newComment;
    }

    async createCommentForComment(commentData){

        const { parentCommentId } = commentData

        const comment = await Comment.findOne( { where: { id: parentCommentId } });

        if(!comment){
            throw new Error('Comment not found!');
        }

        const newComment = await Comment.create(commentData);

        return newComment;
    }

    async deleteComment(id){
        const comment = await Comment.findOne({ where: { id } })
        if(!comment){
            throw new Error ('Comment not found!')        
        }    
        await comment.destroy();
        return comment;
    }

    async getAllComments(){
        return await Comment.findAll({ 
            include: [
                {
                    model: Post,
                    attributes: ['id', 'title', 'userId'],
                    required: false
                },
                {
                    model: Comment,
                    as: 'parent',
                    attributes: ['id', 'message', 'userId'],
                    required: false, 
                }
            ]
        });
    }

    async getCommentById(id){
        const comment = await Comment.findOne({
             where: {id},
             include: [ { 
                model: Post, 
                attributes: ['id', 'title', 'userId']
             }] 
        });
        if (!comment){
            throw new Error ('comment not found!') 
        }
        return comment;
    }

    async getCommentByPostId(postId) {
        const comments = await Comment.findAll({
            where: { postId },
            include: [{ model: Post, attributes: ['id', 'title', 'userId'] }]
        });

        if (!comments) {
            throw new Error('No comments found for this post!');
        }

        return comments;
    }

    async getCommentByCommentId(commentId) {
        const comments = await Comment.findAll({
            where: { parentCommentId: commentId },
            include: [{
                model: Comment,
                as: 'replies',
                attributes: ['id', 'message', 'userId']
            }]
        });
        
        if (!comments) {
            throw new Error('No replies found for this comment!');
        }

        return comments;
    }

    async updateComment(id, commentData) {
        const comment = await Comment.findOne({ where: { id } });
        if (!comment) {
            throw new Error('Comment not found!');
        }

        const updatedFields = {};

        if (commentData.message !== undefined) {
            updatedFields.message = commentData.message;
        }

        if (commentData.picture !== undefined) {
            updatedFields.picture = commentData.picture;
        }

        await comment.update(updatedFields);

        return comment;
    }

}

module.exports = new CommentService()