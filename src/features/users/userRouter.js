const express = require('express')
const UserController = require('./userController');
const { verifyToken, verifyRole} = require('../../middleware/authMiddleware');

const UserRouter = express.Router()

// UserRouter.use(verifyToken);

UserRouter.get('/get/profile', verifyToken, UserController.getProfile);

// UserRouter.use(verifyRole( ['ROLE_User'] ));

UserRouter.get('/', UserController.getAllUsers);
UserRouter.get('/:id', UserController.getUserByUserId);
// UserRouter.put('/:userId',upload.single('profilePicture'), UserController.updateUser);

// UserRouter.post('/enroll', validationEnrollInCourse, UserController.enrollInCourse)

// UserRouter.use(verifyRole( ['ROLE_ADMIN'] ));

UserRouter.delete('/:id', UserController.deleteUser);

module.exports = UserRouter; 