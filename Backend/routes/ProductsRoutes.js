import * as ProductsController from '../controllers/ProductsController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import express from 'express';
import multer from 'multer';
const ProductRoutes = express.Router();


const storage = multer.memoryStorage();
const upload = multer({ storage: storage }); 

ProductRoutes.post('/products', authMiddleware, upload.array('images', 5), ProductsController.createProduct);
ProductRoutes.get('/products', authMiddleware, ProductsController.getProducts);
ProductRoutes.get('/products/:id', authMiddleware, ProductsController.getProductById);
ProductRoutes.get('/products/shop/:shopID', authMiddleware, ProductsController.getProductsByShopId);
ProductRoutes.put('/products/:id', authMiddleware, ProductsController.updateProduct);
ProductRoutes.delete('/products/:id', authMiddleware, ProductsController.deleteProduct);

export default ProductRoutes;