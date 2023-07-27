import express from 'express'
const router = express.Router();

import categoryController from '../../controllers/category.contronller'
router.post('/', categoryController.create)

module.exports = router;