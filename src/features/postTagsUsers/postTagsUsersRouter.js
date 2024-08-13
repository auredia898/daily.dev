const express = require('express');
const postsTagsUsersController = require('./postTagsUsersController');
const { verifyToken } = require('../../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, postsTagsUsersController.createPostsTagsUsers);
router.put('/:id', verifyToken, postsTagsUsersController.updatePostsTagsUsers);
router.get('/:username', verifyToken, postsTagsUsersController.getUsersByUsername);

module.exports = router;
