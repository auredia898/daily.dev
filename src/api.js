const express = require('express');

const authRouter = require('./features/auth/authRouter')
const UserRouter = require('./features/users/userRouter')

const router = express();

router.use('/auth', authRouter)
router.use('/users', UserRouter)

module.exports = router;