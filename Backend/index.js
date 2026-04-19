import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import AuthRoutes from './routes/AuthRoutes.js';
import ShopRoutes from './routes/ShopRoutes.js';
import ConnectDB from './db/ConnectToDB.js';

const app = express( );
ConnectDB();

app.use(express.json());
app.use(cors());

app.use('/auth', AuthRoutes);
app.use('/api', ShopRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000')
})