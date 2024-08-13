const express = require('express')
const HidePostController = require('./hidePostController')
const router = express.Router()
const { verifyToken, verifyRole} = require('../../middleware/authMiddleware');

router.post('/', verifyToken, HidePostController.HidePost)
router.get('/user/:userId', HidePostController.getHidePostsByUser)
router.get('/post/:postId', HidePostController.getHidePostsByPost)
router.delete('/:userId/:postId', HidePostController.deleteHidePost)

module.exports = router
