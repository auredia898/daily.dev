const express = require('express');
const squadController = require('./squadController');
const upload = require('../../middleware/muter')
const router = express.Router();




router.post('/', upload.single('picture'), squadController.createSquad);
router.put('/:id', upload.single('picture'), squadController.updateSquad);
router.get('/', squadController.getAllSquads);
router.delete('/:id', squadController.deleteSquad)



module.exports = router;