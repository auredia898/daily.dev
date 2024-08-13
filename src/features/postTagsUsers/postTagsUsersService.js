const { PostsTagsUsers, User} = require('../../utils/index')
const { Op } = require('sequelize');


class PostsTagsUsersService {

    async createPostsTagsUsers(postTagsUsersData) {
        const { postId, usernames } = postTagsUsersData;
        const tagsUsers = [];

        for (const username of usernames) {
            const user = await User.findOne({ where: { username } });
            if (!user) {
                throw new Error(`User not found for username: ${username}`);
            }

            const newtagUser = await PostsTagsUsers.create({
                postId,
                userId: user.id,
                username
            });

            tagsUsers.push(newtagUser);
        }

        return tagsUsers;
    }

    async updatePostsTagsUsers(id, postTagsUsersData) {
        const postsTagsUsers = await PostsTagsUsers.findOne({ where: { id } });
        if (!postsTagsUsers) {
            throw new Error('Association not found!');
        }
        postsTagsUsers.set(postTagsUsersData);
        await postsTagsUsers.save();
        return postsTagsUsers;
    }

    async getUsersByUsername(username) {
        const users = await User.findAll({ 
            where: { 
                username: {
                    [Op.like]: `${username}%`
                } 
            } 
        });
        if (users.length === 0) {
            throw new Error('No users found with the provided username!');
        }
        return users;
    }

}

module.exports = new PostsTagsUsersService();
