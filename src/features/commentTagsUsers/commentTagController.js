const CommentTagService = require('./commentTagService');

class CommentTagController {
    async tagUsers(req, res) {
        try {
            const { commentId, usernames } = req.body;
            const userId = req.user.userId;

            const commentTagData = {
                commentId,
                userId,
                usernames
            };

            const newTags = await CommentTagService.tagUsers(commentTagData);
            res.status(201).json({ message: 'Users tagged successfully!', tags: newTags });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async searchUsernames(req, res) {
        try {
            const query = req.query.q;
            const users = await CommentTagService.searchUsernames(query);

            res.status(200).json(users);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new CommentTagController();