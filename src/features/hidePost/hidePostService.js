const { HidePost, Post,  User} = require('../../utils/index')

class HidePostService {
    
    async HidePost(hidePostData) {
        try {
            const {postId} = hidePostData
            const post = await Post.findByPk(postId);
            if (!post) {
                throw new Error('Post not found');
            }

            const hidePost = await HidePost.create(hidePostData);
            return hidePost;
        } catch (error) {
            console.log(error)
            throw new Error(`Error creating bookmark: ${error.message}`);
        }
    }

    async getHidePostsByUser(userId) {
        try {
            const user = await User.findByPk(userId);
            if (!user) {
                throw new Error('User not found');
            }

            const hidePosts = await HidePost.findAll({ where: { userId } });
            return hidePosts;
        } catch (error) {
            throw new Error(`Error retrieving HidePosts: ${error.message}`);
        }
    }

    async getHidePostsByPost(postId) {
        try {
            const post = await Post.findByPk(postId);
            if (!post) {
                throw new Error('Post not found');
            }

            const hidePosts = await HidePost.findAll({ where: { postId } });
            return hidePosts;
        } catch (error) {
            console.log(error)
            throw new Error(`Error retrieving HidePosts: ${error.message}`);
        }
    }

    async deleteHidePost(id) {
        try {
            const hidePost = await HidePost.findOne({ where: { id } });
            if (!hidePost) {
                throw new Error('HidePost not found');
            }

            await hidePost.destroy({ where: { id } });
            return { message: 'HidePost deleted successfully' };
        } catch (error) {
            throw new Error(`Error deleting HidePost: ${error.message}`);
        }
    }
}

module.exports = new HidePostService();
