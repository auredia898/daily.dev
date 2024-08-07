const express = require('express');
const typeSquadRouter = require('./features/typeSquad/typeSquad.Router');


const router = express();

router.use('/typeSquad', typeSquadRouter)


module.exports = router;