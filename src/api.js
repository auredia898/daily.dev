const express = require('express');
const typeSquadRouter = require('./features/squadType/squadTypeRouter');
const squadRouter = require('./features/squads/squadRouter');


const router = express();

router.use('/typeSquad', typeSquadRouter)
router.use('/squad', squadRouter)


module.exports = router;