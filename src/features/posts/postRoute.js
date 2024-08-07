const express = require('express')
const postController = require('./postController')
const router = express.Router()

router.post('/post', postController.createPost)
router.get('/post/:squadId', postController.getPostsBySquad)
router.put('/post/:postId', postController.updatePost)
router.delete('/post/:postId', postController.deletePost)

module.exports = router
