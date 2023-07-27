import express from 'express';
const router = express.Router();

import userApi from './apis/user.api';
router.use('/users', userApi)

import productApi from './apis/product.api';
router.use('/products', productApi)

import categoryApi from './apis/category.api';
router.use('/categories', categoryApi)

module.exports = router;