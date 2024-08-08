const HistoryService = require('./historyService');

class HistoryController {
    async createHistory(req, res) {
        try {
            const { postId } = req.body;
            const userId = req.user.userId;

            const historyData = {
                userId,
                postId,
            };

            const newHistory = await HistoryService.createHistory(historyData);
            res.status(201).json({ message: 'History created successfully', newHistory });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    }

    async deleteHistory(req, res) {
        try {
            const { id } = req.params;
            const deleteHistory = await HistoryService.deleteHistory(id);
            res.status(200).send(deleteHistory);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async getAllHistory(req, res) {
        try {
            const histories = await HistoryService.getAllHistory();
            res.status(200).json(histories);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new HistoryController();
