const { CommentTagsUsers, User } = require('../../utils/index');
const { Op } = require('sequelize');

class CommentTagService {

    async tagUsers(commentTagData) {
        const { commentId, usernames } = commentTagData;

        const tags = [];

        for (const username of usernames) {
            const user = await User.findOne({ where: { username } });
            if (!user) {
                throw new Error(`User not found for username: ${username}`);
            }

            const newTag = await CommentTagsUsers.create({
                commentId,
                userId: user.id,
                username
            });

            tags.push(newTag);
        }

        return tags;
    }

    async searchUsernames(username) {
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

module.exports = new CommentTagService();