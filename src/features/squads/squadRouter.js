const express = require('express');
const squadController = require('./squadController');
const {uploadSquad} = require('../../middleware/muter')
const router = express.Router();


router.post('/', uploadSquad.single('picture'), squadController.createSquad);
router.put('/:id', uploadSquad.single('picture'), squadController.updateSquad);
router.get('/', squadController.getAllSquads);
router.delete('/:id', squadController.deleteSquad)



module.exports = router;