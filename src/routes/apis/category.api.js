import express from 'express'
const router = express.Router();

import categoryController from '../../controllers/category.contronller'
import categoryMiddleware from '../../middlewares/category.middleware';
router.post('/', categoryMiddleware.createValidate, categoryController.create)

module.exports = router;