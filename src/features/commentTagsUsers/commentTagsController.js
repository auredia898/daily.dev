const CommentTagService = require('./commentTagsService');

class CommentTagController {
    async tagUsers(req, res) {
        try {
            const { commentId, usernames } = req.body;

            const commentTagData = {
                commentId,
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
            const { username } = req.params;
            const users = await CommentTagService.searchUsernames(username);
            res.status(200).json(users);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
    
}

module.exports = new CommentTagController();