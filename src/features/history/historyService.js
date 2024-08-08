const { History } = require('../../utils/index');

class HistoryService {
    async createHistory(historyData) {
        const { userId, postId } = historyData;
        const history = await History.create({ userId, postId });
        return history;
    }

    async updateHistory(id, historyData) {
        const history = await History.findOne({ where: { id } });
        if (!history) {
            throw new Error('History not found!');
        }

        history.set(historyData);
        await history.save();
        return history;
    }

    async deleteHistory(id) {
        const history = await History.findOne({ where: { id } });
        if (!history) {
            throw new Error('History not found!');
        }

        await history.destroy();
        return { message: 'History deleted successfully' };
    }

    async getAllHistories() {
        return await History.findAll();
    }
}

module.exports = new HistoryService();
