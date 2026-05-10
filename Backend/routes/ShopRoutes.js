import * as ShopController from '../controllers/ShopController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import express from 'express';
const ShopRoutes = express.Router();


ShopRoutes.post('/shops', authMiddleware, ShopController.createShop);
ShopRoutes.get('/shops', authMiddleware, ShopController.getShops);
ShopRoutes.get('/shops/:id', authMiddleware, ShopController.getShopById);
ShopRoutes.put('/shops/:id', authMiddleware, ShopController.updateShop);
ShopRoutes.delete('/shops/:id', authMiddleware, ShopController.deleteShop);


export default ShopRoutes;
