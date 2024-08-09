const BookmarkService = require('./bookmarksService')

class BookmarkController {
    async createBookmark(req, res) {
        try {
            const bookmark = await BookmarkService.createBookmark(req.body)
            res.status(201).json(bookmark)
        } catch (error) {
            res.status(400).json({error : error.message})
        }
    }

    async getBookmarksByUser(req, res) {
        try {
            const bookmarks = await BookmarkService.getBookmarksByUser(req.params.userId)
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
            const result = await BookmarkService.deleteBookmark(req.params.userId, req.params.postId)
            res.status(200).json(result)
        } catch (error) {
            res.status(400).json({error : error.message})
        }
    }
}

module.exports = new BookmarkController()