const HidePostService = require('./hidePostService')

class HidePostController {
    
    async HidePost(req, res) {
        try {
            const { postId } = req.body
            const userId = req.user.userId; 

            const hidePostData = {
                postId,
                userId
            }

            const hidePost = await HidePostService.HidePost(hidePostData)
            res.status(201).json(hidePost)
        } catch (error) {
            res.status(400).json({error : error.message})
        }
    }

    async getHidePostsByUser(req, res) {
        try {
            const hidePosts = await HidePostService.getHidePostsByUser(req.params.userId)
            res.status(200).json(hidePosts)
        } catch (error) {
            res.status(400).json({error : error.message})
        }
    }

    async getHidePostsByPost(req, res) {
        try {
            const hidePosts = await HidePostService.getHidePostsByPost(req.params.postId)
            res.status(200).json(hidePosts)
        } catch (error) {
            res.status(400).json({error : error.message})
        }
    }
    
    async deleteHidePost (req, res) {
        try {
            const result = await HidePostService.deleteHidePost(req.params.id)
            res.status(200).json(result)
        } catch (error) {
            res.status(400).json({error : error.message})
        }
    }
}

module.exports = new HidePostController()