const PostService = require('./postService')

class PostController {
    async createPost (req, res) {
        try {

            const { thumbnail, title, content, description, link, squadId } = req.body
            const userId = req.user.userId; 
            
            const postData = {
                thumbnail,
                title,
                content,
                description,
                link,
                squadId,
                picture: req.file? req.file.path : null, 
                userId
            }

            const post = await PostService.createPost(postData)
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

    async getPostsByUser (req, res) {
        try {
            const posts = await PostService.getPostsByUser(req.params.userId)
            res.status(200).json(posts)
        } catch (error) {
            res.status(400).json({error : error.message})
        }
    }

    async getPostById (req, res) {
        try {
            const post = await PostService.getPostById(req.params.postId)
            res.status(200).json([post])
        } catch (error) {
            res.status(400).json({error : error.message})
        }
    }

    async getAllPosts(req, res) {
        try {
            const page = parseInt(req.query.page) || 1
            const limit = 12

            const posts = await PostService.getAllPosts(page, limit)
            res.status(200).json(posts)
        } catch (error) {
            res.status(400).json({error : error.message})
        }
    }

    async updatePost(req, res) {
        try {
            const id = req.params.id;
            const { title, content, description, link, thumbnail } = req.body;

            const picture = req.file ? req.file.path : null;

            const postData = {
                title,
                content,
                description,
                link,
                thumbnail,
                picture
            };

            const updatedPost = await PostService.updatePost(id, postData);
            res.status(200).json({ message: 'Post updated successfully!', post: updatedPost });
        } catch (error) {
            res.status(400).json({ error: error.message });
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