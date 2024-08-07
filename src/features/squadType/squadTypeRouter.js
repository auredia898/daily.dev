const express = require('express');
const router = express.Router();
const squadTypeController = require('./squadTypeController');




router.post('/', squadTypeController.createSquadType);
router.put('/:id', squadTypeController.updateSquadType);
router.get('/', squadTypeController.getAllSquadType);
router.delete('/:id', squadTypeController.deleteSquadType)



module.exports = router;