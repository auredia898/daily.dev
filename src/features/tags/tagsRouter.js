const express = require('express');
const router = express.Router();
const tagsController = require('./tagsController');




router.post('/', tagsController.createTags);
router.put('/:id', tagsController.updateTag);
router.get('/', tagsController.getAllTag);
router.delete('/:id', tagsController.deleteTag)



module.exports = router;