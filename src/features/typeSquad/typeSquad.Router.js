const express = require('express');
const router = express.Router();
const typeSquadController = require('./typeSquad.Controller');




router.post('/', typeSquadController.createTypeSquad);



module.exports = router;