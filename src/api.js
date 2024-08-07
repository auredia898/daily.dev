const express = require('express');

const authRouter = require('./features/auth/authRouter')

const router = express();

router.use('/auth', authRouter)

module.exports = router;