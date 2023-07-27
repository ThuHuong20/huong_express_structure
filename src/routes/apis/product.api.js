import express from 'express';
const router = express.Router();
import productController from '../../controllers/product.controller';
//router.post('/set-product-data', productController.createProductDefault);
//router.delete('/', productController.deleteProduct)
router.get('/', productController.getProducts);
//router.post('/', productController.createProduct);

module.exports = router;