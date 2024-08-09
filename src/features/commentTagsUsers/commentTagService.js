const { CommentTagsUsers, User } = require('../../utils/index');

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
                username
            });

            tags.push(newTag);
        }

        return tags;
    }

    // async searchUsernames(query) {
    //     const users = await User.findAll({
    //         where: {
    //             username: {
    //                 [Op.like]: %${query}%
    //             }
    //         },
    //         attributes: ['id', 'username']
    //     });

    //     return users;
    // }
}

module.exports = new CommentTagService();