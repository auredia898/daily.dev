const express = require('express');

const authRouter = require('./features/auth/authRouter')
const UserRouter = require('./features/users/userRouter')
const typeSquadRouter = require('./features/squadType/squadTypeRouter');
const squadRouter = require('./features/squads/squadRouter');
const postRouter = require('./features/posts/postRoute')
const memberSquadRouter = require('./features/memberSquad/memberSquadRouter')
const bookmarkRouter = require('./features/bookmarks/bookmarksRouter')


const router = express();

router.use('/auth', authRouter)
router.use('/users', UserRouter)

router.use('/typeSquad', typeSquadRouter)
router.use('/squad', squadRouter)
router.use('/post', postRouter)
router.use('/memberSquad', memberSquadRouter)
router.use('/bookmarker', bookmarkRouter)

module.exports = router;