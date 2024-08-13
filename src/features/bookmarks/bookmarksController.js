const BookmarkService = require('./bookmarksService')

class BookmarkController {
    async createBookmark(req, res) {
        try {
            const { postId } = req.body
            const userId = req.user.userId; 

            const bookmarkData = {
                postId,
                userId
            }

            const bookmark = await BookmarkService.createBookmark(bookmarkData)
            res.status(201).json(bookmark)
        } catch (error) {
            res.status(400).json({error : error.message})
        }
    }

    async getBookmarksByUser(req, res) {
        try {
            const bookmarks = await BookmarkService.getBookmarksByUser(req.user.userId)
            res.status(200).json(bookmarks)
        } catch (error) {
            res.status(400).json({error : error.message})
        }
    }

    async getBookmarksByPost(req, res) {
        try {
            const bookmarks = await BookmarkService.getBookmarksByPost(req.params.postId)
            res.status(200).json(bookmarks)
        } catch (error) {
            res.status(400).json({error : error.message})
        }
    }
    
    async deleteBookmark (req, res) {
        try {
            const result = await BookmarkService.deleteBookmark(req.user.userId, req.params.postId)
            res.status(200).json(result)
        } catch (error) {
            res.status(400).json({error : error.message})
        }
    }
}

module.exports = new BookmarkController()