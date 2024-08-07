const express = require('express');
const squadController = require('./squadController');
const upload = require('../../middleware/muter')
const router = express.Router();




router.post('/', upload.single('picture'), squadController.createSquad);
router.put('/:id', upload.single('picture'), squadController.updateSquad);
// router.get('/', squadController.getAllSquadType);
// router.delete('/:id', squadController.deleteSquadType)



module.exports = router;