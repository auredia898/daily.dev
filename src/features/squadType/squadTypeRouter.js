const express = require('express');
const router = express.Router();
const squadTypeController = require('./squadTypeController');
const { verifyToken, verifyRole} = require('../../middleware/authMiddleware');

router.get('/', squadTypeController.getAllSquadType);

// router.use(verifyToken);
// router.use(verifyRole( ['admin'] ));

router.post('/', squadTypeController.createSquadType);
router.put('/:id', squadTypeController.updateSquadType);
router.delete('/:id', squadTypeController.deleteSquadType)



module.exports = router;