const { required } = require('joi');
const { Vote , Post, Comment} = require('../../utils/index');

class VoteService{

    async upvote(voteData){

        const { postId, commentId, userId } = voteData

        if (!postId && !commentId) {
            throw new Error('Post ID or Comment ID is required!');
        }

        if(postId){
            const post = await Post.findOne( { where: { id: postId } });
            if(!post){
                throw new Error('Post not found!');
            }
        }

       if(commentId){
            const comment = await Comment.findOne( { where: { id: commentId } });

            if(!comment){
                throw new Error('Comment not found!');
            }
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

        if (!postId && !commentId) {
            throw new Error('Post ID or Comment ID is required!');
        }

        if(postId){
            const post = await Post.findOne( { where: { id: postId } });
            if(!post){
                throw new Error('Post not found!');
            }
        }

       if(commentId){
            const comment = await Comment.findOne( { where: { id: commentId } });

            if(!comment){
                throw new Error('Comment not found!');
            }
       }

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
                    attributes: ['id', 'message', 'userId'],
                    required: false, 
                }
            ]
        });
    }

    async getVoteById(id){
        const vote = await Vote.findOne({
             where: {id},
             include: [
                {
                    model: Post,
                    attributes: ['id', 'title', 'userId'],
                    required: false
                },
                {
                    model: Comment,
                    attributes: ['id', 'message', 'userId'],
                    required: false, 
                }
            ]
        });
        if (!vote){
            throw new Error ('vote not found!') 
        }
        return vote;
    }

    async getVotesByPostId(postId) {
        const votes = await Vote.findAll({
            where: { postId },
            include: [
                {
                    model: Post,
                    attributes: ['id', 'title', 'userId'],
                }
            ]
        });

        if (!votes) {
            throw new Error('No votes found for this post!');
        }

        return votes;
    }

    async getVotesByCommentId(commentId) {
        const votes = await Vote.findAll({
            where: { commentId },
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'message', 'userId'],
                }
            ]
        });
        
        if (!votes) {
            throw new Error('No votes found for this comment!');
        }

        return votes;
    }

}

module.exports = new VoteService()