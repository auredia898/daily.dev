const { required } = require('joi');
const { Vote , Post, Comment} = require('../../utils/index');

class VoteService{

    async upvote(voteData){

        const { postId, commentId, userId } = voteData

        const post = await Post.findOne( { where: { id: postId } });

        if(!post){
            throw new Error('Post not found!');
        }

        const comment = await Comment.findOne( { where: { id: commentId } });

        if(!comment){
            throw new Error('Comment not found!');
        }

        let vote = await Vote.findOne({ 
            where: { 
                userId, 
                postId: postId || null, 
                commentId: commentId || null 
            } 
        });

        if (vote) {
            if (vote.typeVote === 'upvote') {
                await this.deleteVote(vote.id); 
                return { message: 'Upvote removed' };
            } else {
                vote.typeVote = 'upvote';
                await vote.save();
                return vote;
            }
        } else {
            const newVote = await Vote.create({
                ...voteData,
                typeVote: 'upvote'
            });
            return newVote;
        }
    }

    async downvote(voteData) {
        const { postId, commentId, userId } = voteData;

        let vote = await Vote.findOne({ 
            where: { 
                userId, 
                postId: postId || null, 
                commentId: commentId || null 
            } 
        });

        if (vote) {
            if (vote.typeVote === 'downvote') {
                await this.deleteVote(vote.id); 
                return { message: 'Downvote removed' };
            } else {
                vote.typeVote = 'downvote';
                await vote.save();
                return vote;
            }
        } else {
            const newVote = await Vote.create({
                ...voteData,
                typeVote: 'downvote'
            });
            return newVote;
        }
    }

    async deleteVote(id){
        const vote = await Vote.findOne({ where: { id } })
        if(!vote){
            throw new Error ('Vote not found!')        
        }    
        await vote.destroy();
        return vote;
    }

    async getAllVotes(){
        return await Vote.findAll({ 
            include: [
                {
                    model: Post,
                    attributes: ['id', 'title', 'userId'],
                    required: false
                },
                {
                    model: Comment,
                    attributes: ['id', 'content', 'userId'],
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

module.exports = new VoteService()