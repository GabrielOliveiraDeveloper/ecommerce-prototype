import * as ProductsController from '../controllers/ProductsController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import express from 'express';
const ProductRoutes = express.Router();


ProductRoutes.post('/products', authMiddleware, ProductsController.createProduct);
ProductRoutes.get('/products', authMiddleware, ProductsController.getProducts);
ProductRoutes.get('/products/:id', authMiddleware, ProductsController.getProductById);
ProductRoutes.get('/products/shop/:shopID', authMiddleware, ProductsController.getProductsByShopId);
ProductRoutes.put('/products/:id', authMiddleware, ProductsController.updateProduct);
ProductRoutes.delete('/products/:id', authMiddleware, ProductsController.deleteProduct);

export default ProductRoutes;