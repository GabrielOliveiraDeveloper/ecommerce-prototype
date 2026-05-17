import express from 'express';
import * as PaymentsController from '../controllers/PaymentsController.js';
import authMiddleware from '../middlewares/authMiddleware.js';


const PaymentRoutes = express.Router();

PaymentRoutes.post('/payments', PaymentsController.createPaymentWithSplit);
PaymentRoutes.post('/webhook/payment-received', PaymentsController.webhookPaymentReceived);


export default PaymentRoutes;