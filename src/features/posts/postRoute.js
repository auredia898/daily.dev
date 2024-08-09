const express = require('express')
const postController = require('./postController')
const router = express.Router()
const {uploadPost} = require('../../middleware/muter')
const { verifyToken, verifyRole} = require('../../middleware/authMiddleware');

// router.post('/', postController.createPost)
router.post('/', verifyToken, uploadPost.single('picture'), postController.createPost)
router.get('/',  postController.getAllPosts)
router.get('/squad/:squadId', postController.getPostsBySquad)
router.get('/user/:userId', postController.getPostsByUser)
router.get('/:postId', postController.getPostById)
router.put('/:id', verifyToken, uploadPost.single('picture'), postController.updatePost)
router.delete('/:postId', postController.deletePost)

module.exports = router
