// const User = require('../users/userModel');
// const Post = require('../posts/postModel');
// const Bookmark = require('./bookmarksModel');
const { where } = require('sequelize');
const { User , Post, Bookmark } = require('../../utils/index')

class BookmarkService {
    
    async createBookmark(bookmarkData) {
        try {
            const {postId} = bookmarkData
            const post = await Post.findByPk(postId);
            if (!post) {
                throw new Error('Post not found');
            }

            const bookmark = await Bookmark.create(bookmarkData);
            return bookmark;
        } catch (error) {
            console.log(error)
            throw new Error(`Error creating bookmark: ${error.message}`);
        }
    }

    async getBookmarksByUser(userId) {
        try {
            const user = await User.findByPk(userId);
            if (!user) {
                throw new Error('User not found');
            }

            const bookmarks = await Bookmark.findAll({ where: { userId } });
            return bookmarks;
        } catch (error) {
            throw new Error(`Error retrieving bookmarks: ${error.message}`);
        }
    }

    // async getBookmarksByUser(userId) {
    //     try {
    //         const user = await User.findByPk(userId);
    //         if (!user) {
    //             throw new Error('User not found');
    //         }
    
    //         const bookmarks = await Bookmark.findAll({
    //             where: { userId },
    //             include: [
    //                 {
    //                     model: Post ,
    //                     as: 'post' 
    //                 }
    //             ]
    //         });
    
    //         const posts = bookmarks.map(bookmark => bookmark.Post);
    //         return posts;
    //     } catch (error) {
    //         throw new Error(`Error retrieving bookmarks: ${error.message}`);
    //     }
    // }

    async getBookmarksByPost(postId) {
        try {
            const post = await Post.findByPk(postId);
            if (!post) {
                throw new Error('Post not found');
            }

            const bookmarks = await Bookmark.findAll({ where: { postId } });
            return bookmarks;
        } catch (error) {
            console.log(error)
            throw new Error(`Error retrieving bookmarks: ${error.message}`);
        }
    }

    async deleteBookmark(userId, postId) {
        try {
            const bookmark = await Bookmark.findOne({ where: { userId, postId } });
            if (!bookmark) {
                throw new Error('Bookmark not found');
            }

            await Bookmark.destroy({ where: { userId, postId } });
            return { message: 'Bookmark deleted successfully' };
        } catch (error) {
            throw new Error(`Error deleting bookmark: ${error.message}`);
        }
    }
}

module.exports = new BookmarkService();
