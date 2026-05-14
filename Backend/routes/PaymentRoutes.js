import express from 'express';
import * as PaymentsController from '../controllers/PaymentsController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const PaymentRoutes = express.Router();

PaymentRoutes.post('/payments', authMiddleware, PaymentsController.createPaymentWithSplit);

export default PaymentRoutes;