import * as ShopController from '../controllers/ShopController.js';
import express from 'express';
const ShopRoutes = express.Router();


ShopRoutes.post('/shops', ShopController.createShop);
ShopRoutes.get('/shops', ShopController.getShops);
ShopRoutes.get('/shops/:id', ShopController.getShopById);
ShopRoutes.put('/shops/:id', ShopController.updateShop);
ShopRoutes.delete('/shops/:id', ShopController.deleteShop);

ShopRoutes.post('/products', ShopController.createProduct);
ShopRoutes.get('/products', ShopController.getProducts);
ShopRoutes.get('/products/:id', ShopController.getProductById);
ShopRoutes.put('/products/:id', ShopController.updateProduct);
ShopRoutes.delete('/products/:id', ShopController.deleteProduct);


export default ShopRoutes;
