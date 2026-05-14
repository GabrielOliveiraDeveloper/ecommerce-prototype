const PaymentsController = require('../controllers/PaymentsController');
const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const PaymentRoutes = express.Router();

PaymentRoutes.post('/payments', authMiddleware, PaymentsController.createPaymentWithSplit);

export default PaymentRoutes;