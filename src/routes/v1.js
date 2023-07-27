import express from 'express';
const router = express.Router();



import categoryApi from './apis/category.api';
router.use('/categories', categoryApi)

module.exports = router;