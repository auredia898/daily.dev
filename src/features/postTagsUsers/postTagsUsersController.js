const postTagsUsersService = require('./postTagsUsersService');
const PostsTagsUsersService  = require('./postTagsUsersService');

class PostsTagsUsersController {

    async createPostsTagsUsers(req, res) {
        try {
            const { postId, usernames } = req.body;

            const postTagsUsersData = { postId, usernames };
            const newPostsTagsUsers = await PostsTagsUsersService.createPostsTagsUsers(postTagsUsersData);
            res.status(201).json({ message: 'Users tagged successfully!', newPostsTagsUsers });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    }

    async updatePostsTagsUsers(req, res) {
        try {
            const { id } = req.params;
            const { postId, userId, username } = req.body;
            const postTagsUsersData = { postId, userId, username };
            const updatedPostsTagsUsers = await PostsTagsUsersService.updatePostsTagsUsers(id, postTagsUsersData);
            res.status(200).json(updatedPostsTagsUsers);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUsersByUsername(req, res) {
        try {
            const { username } = req.params;
            const users = await postTagsUsersService.getUsersByUsername(username);
            res.status(200).json(users);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

}

module.exports = new PostsTagsUsersController();
