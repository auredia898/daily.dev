const express = require('express');

const authRouter = require('./features/auth/authRouter')
const UserRouter = require('./features/users/userRouter')
const typeSquadRouter = require('./features/squadType/squadTypeRouter');
const squadRouter = require('./features/squads/squadRouter');
const postRouter = require('./features/posts/postRoute')
const memberSquadRouter = require('./features/memberSquad/memberSquadRouter')
const historyRouter = require('./features/history/historyRouter')
const tagsRouter = require('./features/tags/tagsRouter')
const voteRouter = require('./features/votes/voteRouter')
const bookmarkRouter = require('./features/bookmarks/bookmarksRouter')
const postTagRouter = require('./features/postTags/postTagRouter')
const typeOfSocialMediaRouter = require('./features/typeOfSocialMedia/TypeOfSocialMediaRouter')
const postTagsUsersRouter = require('./features/postTagsUsers/postTagsUsersRouter')
const socialMediaLinksRouter = require('./features/socialMediaLink/SocialMediaLinkRouter');
const commentRouter = require('./features/comments/commentRouter')
const commentTagRouter = require('./features/commentTagsUsers/commentTagsRouter')
const subscriptionRouter = require('./features/subscriptions/subscriptionRouter');
const hidePostRouter = require('./features/hidePost/hidePostRouter')

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
router.use('/postTag', postTagRouter)
router.use('/votes', voteRouter)
router.use('/postTagsUsers', postTagsUsersRouter)
router.use('/bookmarker', bookmarkRouter)
router.use('/typeOfSocialMedia', typeOfSocialMediaRouter)
router.use('/socialMediaLinks', socialMediaLinksRouter);
router.use('/comment-tags', commentTagRouter)
router.use('/subscriptions', subscriptionRouter)
router.use('/hide-post', hidePostRouter)

module.exports = router;