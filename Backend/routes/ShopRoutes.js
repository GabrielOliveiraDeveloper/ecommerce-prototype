import * as ShopController from '../controllers/ShopController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import express from 'express';
const ShopRoutes = express.Router();


ShopRoutes.post('/shops', authMiddleware, ShopController.createShop);
ShopRoutes.get('/shops', authMiddleware, ShopController.getShops);
ShopRoutes.get('/shops/:id', authMiddleware, ShopController.getShopById);
ShopRoutes.put('/shops/:id', authMiddleware, ShopController.updateShop);
ShopRoutes.delete('/shops/:id', authMiddleware, ShopController.deleteShop);

ShopRoutes.post('/products', authMiddleware, ShopController.createProduct);
ShopRoutes.get('/products', authMiddleware, ShopController.getProducts);
ShopRoutes.get('/products/:id', authMiddleware, ShopController.getProductById);
ShopRoutes.put('/products/:id', authMiddleware, ShopController.updateProduct);
ShopRoutes.delete('/products/:id', authMiddleware, ShopController.deleteProduct);


export default ShopRoutes;
