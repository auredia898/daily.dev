const express = require('express');
const squadController = require('./squadController');
const {uploadSquad} = require('../../middleware/muter')
const { verifyToken} = require('../../middleware/authMiddleware');

const router = express.Router();


router.post('/', verifyToken, uploadSquad.single('picture'), squadController.createSquad);
router.put('/:id', uploadSquad.single('picture'), squadController.updateSquad);
router.get('/', squadController.getAllSquads);
router.delete('/:id', squadController.deleteSquad)



module.exports = router;