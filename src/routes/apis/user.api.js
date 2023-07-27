import express from 'express';
const router = express.Router();

import userController from '../../controllers/user.controller';
import validateMiddleware from '../../middlewares/validateMiddleware';
// Tạo 1 middleware validate tất cả query, params trc khi userController.getUsers đc gọi
router.get('/', validateMiddleware.getUserValidate, userController.getUsers);
router.post('/', userController.createUser);
router.delete('/:userId', userController.deleteUserById);
router.put('/:userId', userController.updateUserById);
router.patch('/:userId', userController.updateFieldUserById);

module.exports = router;