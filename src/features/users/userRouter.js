const express = require('express')
const UserController = require('./userController');
const { verifyToken, verifyRole} = require('../../middleware/authMiddleware');
const {uploadUser} = require('../../middleware/muter')

const UserRouter = express.Router()

UserRouter.use(verifyToken);

UserRouter.use(verifyRole( ['user', 'admin'] ));

UserRouter.get('/get/profile', UserController.getProfile);
UserRouter.put('/', uploadUser,  UserController.updateUser);
UserRouter.delete('/:id', UserController.deleteUser);

UserRouter.use(verifyRole( ['admin'] ));

UserRouter.get('/', UserController.getAllUsers);
UserRouter.get('/:id', UserController.getUserByUserId);


module.exports = UserRouter; 