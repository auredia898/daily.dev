const express = require('express');
const typeSquadRouter = require('./features/squadType/squadTypeRouter');


const router = express();

router.use('/typeSquad', typeSquadRouter)


module.exports = router;