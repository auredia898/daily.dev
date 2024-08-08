const express = require('express');
const historyController = require('./historyController');
const { verifyToken } = require('../../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, historyController.createHistory);
router.get('/', verifyToken, historyController.getAllHistory);
router.delete('/:id', verifyToken, historyController.deleteHistory);

module.exports = router;
