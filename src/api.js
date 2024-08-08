const express = require('express');

const authRouter = require('./features/auth/authRouter')
const UserRouter = require('./features/users/userRouter')
const typeSquadRouter = require('./features/squadType/squadTypeRouter');
const squadRouter = require('./features/squads/squadRouter');
const postRouter = require('./features/posts/postRoute')
const memberSquadRouter = require('./features/memberSquad/memberSquadRouter')
const commentRouter = require('./features/comments/commentRouter')
const historyRouter = require('./features/history/historyRouter')
const tagsRouter = require('./features/tags/tagsRouter')


const router = express();

router.use('/auth', authRouter)
router.use('/users', UserRouter)

router.use('/typeSquad', typeSquadRouter)
router.use('/squad', squadRouter)
router.use('/post', postRouter)
router.use('/memberSquad', memberSquadRouter)
router.use('/comments', commentRouter)
router.use('/history', historyRouter)
router.use('/tags', tagsRouter)



module.exports = router;