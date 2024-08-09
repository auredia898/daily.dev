const express = require('express')
const BookmarkController = require('./bookmarksController')
const router = express.Router()

router.post('/', BookmarkController.createBookmark)
router.get('/user/:userId', BookmarkController.getBookmarksByUser)
router.get('/post/:postId', BookmarkController.getBookmarksByPost)
router.delete('/:userId/:postId', BookmarkController.deleteBookmark)

module.exports = router
