const express = require('express')
const CommentTagController = require('./commentTagsController')
const router = express.Router()
const { verifyToken, verifyRole} = require('../../middleware/authMiddleware');

router.post('/', verifyToken, CommentTagController.tagUsers)
router.get('/search', CommentTagController.searchUsernames);
// router.get('/user/:userId', CommentTagController.getBookmarksByUser)
// router.get('/post/:postId', CommentTagController.getBookmarksByPost)
// router.delete('/:userId/:postId', CommentTagController.deleteBookmark)

module.exports = router
