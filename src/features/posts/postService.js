const User = require('../users/userModel');
const Post = require('./postModel');
const Squad = require('../squads/squadModel');

class PostService {
    async createPost({ thumbnail, title, content, picture, description, link, userId, squadId }) {
        try {
            const user = await User.findOne({ where: { id: userId } });
            const squad = await Squad.findOne({ where: { id: squadId } });
            if (!user || !squad ) {
                throw new Error('Unable to create post: User or Squad not found');
            }
            // Vérification si l'utilisateur est membre du groupe
/*             const isMember = await squad.hasUser(user); // Supposant que vous avez une relation entre Squad et User
            if (!isMember) {
            throw new Error('Unable to create post: User is not a member of the squad');
            } */

            const post = await Post.create({ thumbnail, title, content, picture, description, link, userId, squadId });
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

    async getAllPosts() {
        try {
            const posts = await Post.findAll();
            return posts;
        } catch (error) {
            throw new Error(`Error retrieving posts: ${error.message}`);
        }
    }
    

    async updatePost(postId, { thumbnail, title, content, picture, description, link, userId, squadId }) {
        try {
            const postFind = await Post.findByPk(postId);
            if (!postFind) {
                throw new Error('Post not found');
            }
            await Post.update({ thumbnail, title, content, picture, description, link, userId, squadId }, { where: { id: postId } });
            return await Post.findByPk(postId);
        } catch (error) {
            throw new Error(`Error updating post: ${error.message}`);
        }
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
