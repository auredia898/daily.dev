const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');
const multer  = require('multer')

const Squadstorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'squads',
        allowedFormats:['jpg', 'png'],
        public_id: (req, file) => `squad_${Date.now()}`,

    },
});

const Userstorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'squads',
        allowedFormats:['jpg', 'png'],
        public_id: (req, file) => `user_${Date.now()}`,
    },
});

const uploadSquad = multer({ storage: Squadstorage })
const uploadUser = multer({ 
    storage: Userstorage,
    limits: { fileSize: 10 * 1024 * 1024 }, 
}).fields([
    { name: 'profilePicture', maxCount: 1 }, 
    { name: 'coverPicture', maxCount: 1 }  
]);

module.exports = {
    uploadSquad,
    uploadUser
}