const express = require('express');
const memberSquadController = require('./memberSquadController');
const router = express.Router();




router.post('/', memberSquadController.createMemberSquad);
router.put('/:id', memberSquadController.updateMemberSquad);
router.get('/', memberSquadController.getAllMemberSquads);
router.delete('/:id', memberSquadController.deleteMemberSquad)



module.exports = router;