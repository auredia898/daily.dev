const express = require('express');
const historyController = require('./historyController');
const { verifyToken } = require('../../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, historyController.createHistory);
router.put('/:id', verifyToken, historyController.updateHistory);
router.get('/', verifyToken, historyController.getAllHistories);
router.delete('/:id', verifyToken, historyController.deleteHistory);

module.exports = router;
