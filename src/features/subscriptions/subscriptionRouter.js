const express = require('express');
const router = express.Router();
const subscriptionController = require('./subscriptionController');
const { verifyToken} = require('../../middleware/authMiddleware');





router.post('/', verifyToken, subscriptionController.createSubscription);
router.get('/', verifyToken, subscriptionController.getAllSubscription);
router.delete('/:id', verifyToken, subscriptionController.deleteSubscription)



module.exports = router;