import express from 'express';
const AuthRoutes = express.Router();

import LoginController from '../controllers/LoginController.js';
import RegisterController from '../controllers/RegisterController.js';

AuthRoutes.post('/login', LoginController);
AuthRoutes.post('/register', RegisterController);

export default AuthRoutes;