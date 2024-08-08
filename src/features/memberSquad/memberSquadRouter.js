const express = require('express');
const memberSquadController = require('./memberSquadController');
const { verifyToken} = require('../../middleware/authMiddleware');

const router = express.Router();




router.post('/', verifyToken, memberSquadController.createMemberSquad);
router.put('/:id', memberSquadController.updateMemberSquad);
router.get('/', memberSquadController.getAllMemberSquads);
router.delete('/:id', memberSquadController.deleteMemberSquad);
router.get('/:id', memberSquadController.getAllMembersBySquadId);



module.exports = router;