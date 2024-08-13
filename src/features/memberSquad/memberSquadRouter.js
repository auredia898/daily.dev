const express = require('express');
const memberSquadController = require('./memberSquadController');
const { verifyToken, verifyMemberRole} = require('../../middleware/authMiddleware');

const router = express.Router();

router.use(verifyToken);

router.post('/',  memberSquadController.createMemberSquad);
router.put('/:id', verifyMemberRole(['admin']), memberSquadController.updateMemberSquad);
router.get('/', memberSquadController.getAllMemberSquads);
router.delete('/:id', memberSquadController.deleteMemberSquad);
router.get('/by-squad/:id', memberSquadController.getAllMembersBySquadId);
router.get('/by-user', memberSquadController.getAllSquadsByUserId)


module.exports = router;