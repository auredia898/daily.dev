const express = require('express');
const postTagController = require('./postTagController');

const router = express.Router();




router.post('/', postTagController.createPostTag);
// router.put('/:id', memberSquadController.updateMemberSquad);
router.get('/', postTagController.getAllPostTags);
// router.delete('/:id', memberSquadController.deleteMemberSquad);
router.get('/:id', postTagController.getAllTagsByPostId);



module.exports = router;