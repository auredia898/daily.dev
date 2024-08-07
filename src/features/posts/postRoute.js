const express = require('express')
const postController = require('./postController')
const router = express.Router()

router.post('/', postController.createPost)
router.get('/:squadId', postController.getPostsBySquad)
router.put('/:postId', postController.updatePost)
router.delete('/:postId', postController.deletePost)

module.exports = router
