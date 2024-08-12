const { PostsTagsUsers, User} = require('../../utils/index')
const { Op } = require('sequelize');


class PostsTagsUsersService {

    async createPostsTagsUsers(postTagsUsersData) {
        const { postId, userId } = postTagsUsersData;
        const user = await User.findOne({where: {id: userId}});
        if(!user){
            throw new Error('User not found');
        }

        const postsTagsUsers = await PostsTagsUsers.create({ postId, userId, username: user.username });
        return postsTagsUsers;
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
        if (users.lenght === 0) {
            throw new Error('No users found with the provided username!');
        }
        return users;
    }

}

module.exports = new PostsTagsUsersService();
