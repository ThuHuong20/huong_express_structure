import express from 'express'
const router = express.Router();

import categoryController from '../../controllers/category.contronller'
import categoryMiddleware from '../../middlewares/category.middleware';
router.post('/', categoryMiddleware.createValidate, categoryController.create)
router.get('/', categoryMiddleware.readManyValidate, categoryController.readMany)
router.patch('/:categoryId', categoryMiddleware.updateValidate, categoryController.update)

module.exports = router;