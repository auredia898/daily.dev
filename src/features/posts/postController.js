const PostService = require('./postService')

class PostController {
    async createPost (req, res) {
        try {
            const post = await PostService.createPost(req.body)
            res.status(201).json(post)
        } catch (error) {
            res.status(400).json({error : error.message})
        }
    }

    async getPostsBySquad (req, res) {
        try {
            const posts = await PostService.getPostsBySquad(req.params.squadId)
            res.status(200).json(posts)
        } catch (error) {
            res.status(400).json({error : error.message})
        }
    }

    async updatePost (req, res) {
        try {
            const post = await PostService.updatePost(req.params.postId, req.body)
            res.status(200).json(post)
        } catch (error) {
            res.status(400).json({error : error.message})
        }
    }

    async deletePost (req, res) {
        try {
            const result = await PostService.deletePost(req.params.postId)
            res.status(200).json(result)
        } catch (error) {
            res.status(400).json({error : error.message})
        }
    }
}

module.exports = new PostController()