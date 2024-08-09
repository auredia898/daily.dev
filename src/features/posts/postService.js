const User = require('../users/userModel');
const Post = require('./postModel');
const Squad = require('../squads/squadModel');

class PostService {
    async createPost(postData) {
        try {

            const { squadId } = postData

            const squad = await Squad.findOne({ where: { id: squadId } });
            if (!squad ) {
                throw new Error('Unable to create post: Squad not found');
            }
            const post = await Post.create(postData);
            return post;
        } catch (error) {
            console.log(error)
            throw new Error(`Error creating post: ${error.message}`);
        }
    }
    
    async getPostsBySquad(squadId) {
        try {
            const squad = await Squad.findByPk(squadId);
            if (!squad) {
                throw new Error('Unable to retrieve posts: Squad not found');
            }
            const posts = await Post.findAll({ where: { squadId } });
            return posts;
        } catch (error) {
            throw new Error(`Error retrieving posts: ${error.message}`);
        }
    }
    

    async getPostsByUser(userId) {
        try {
            const user = await User.findByPk(userId);
            if (!user) {
                throw new Error('Unable to retrieve posts: User not found');
            }

            const posts = await Post.findAll({ where: { userId } });
            return posts;
        } catch (error) {
            throw new Error(`Error retrieving posts: ${error.message}`);
        }
    }

    async getPostById(postId) {
        try {
            const post = await Post.findByPk(postId);
            if (!post) {
                throw new Error(`Post with ID ${postId} not found`);
            }
            return post;
        } catch (error) {
            throw new Error(`Error retrieving post: ${error.message}`);
        }
    }

    async getAllPosts(page = 1, limit = 12) {
        try {
            const offset = (page - 1) * limit;
            const posts = await Post.findAll({
                limit: limit,
                offset: offset
            });
            return posts;
        } catch (error) {
            throw new Error(`Error retrieving posts: ${error.message}`);
        }
    }
    
    async updatePost(id, postData) {
        const post = await Post.findOne({ where: { id } });
        if (!post) {
            throw new Error('Post not found');
        }

        const updates = {};
        if (postData.title !== undefined) updates.title = postData.title;
        if (postData.content !== undefined) updates.content = postData.content;
        if (postData.description !== undefined) updates.description = postData.description;
        if (postData.link !== undefined) updates.link = postData.link;
        if (postData.thumbnail !== undefined) updates.thumbnail = postData.thumbnail;
        if (postData.picture !== undefined) updates.picture = postData.picture;

        await post.update(updates);
        return post;
    }

    async deletePost(postId) {
        try {
            const post = await Post.findByPk(postId);
            if (!post) {
                throw new Error('Post not found');
            }
            await Post.destroy({ where: { id: postId } });
            return { message: 'Post deleted successfully' }
        } catch (error) {
            throw new Error(`Error deleting post: ${error.message}`);
        }
    }
}

module.exports = new PostService (); 
