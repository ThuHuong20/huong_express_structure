import express from 'express';
const router = express.Router();

import userApi from './apis/user.api';
router.use('/users', userApi)

import productApi from './apis/product.api';
router.use('/products', productApi)

module.exports = router;