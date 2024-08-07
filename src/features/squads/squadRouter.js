const express = require('express');
const router = express.Router();
const squadController = require('./squadController');




router.post('/', squadController.createSquad);
// router.put('/:id', squadController.updateSquadType);
// router.get('/', squadController.getAllSquadType);
// router.delete('/:id', squadController.deleteSquadType)



module.exports = router;