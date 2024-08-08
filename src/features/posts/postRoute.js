const express = require('express')
const postController = require('./postController')
const router = express.Router()

router.post('/', postController.createPost)
router.get('/squad/:squadId', postController.getPostsBySquad)
router.get('/user/:userId', postController.getPostsByUser)
router.get('/:postId', postController.getPostById)
router.put('/:postId', postController.updatePost)
router.delete('/:postId', postController.deletePost)

module.exports = router
