import axios from 'axios';
import Shop from '../models/Shop.js';

const createPaymentWithSplit = async (req, res) => {
    const { product, client } = req.body;

    const WOOVI_API_URL = process.env.WOOVI_API_URL;
    const WOOVI_API_KEY = process.env.WOOVI_API_KEY;
    const shop = await Shop.findById(product.idShop);
    const pixKey = shop.pixKey;

    const body = {
    correlationID: `pedido_${Date.now()}`,
    value: '1000', 
    comment: 'Compra no ecommerce-prototype',
    splits: [
      {
        pixKey: pixKey,
        splitType: 'PERCENTAGE',
        value: product.price, 
      }
    ]
  };

  try {
    const response = await axios.post(WOOVI_API_URL, body, {
      headers: {
        'Authorization': WOOVI_API_KEY,
        'Content-Type': 'application/json'
      }
    });

    res.send( 
        {
            qrCodeImage: response.data.charge.qrCodeImage,
            brCode: response.data.charge.brCode
        }
    );

  } catch (error) {
    console.error('Erro ao gerar Pix:', error.response.data);
  }
};



export { createPaymentWithSplit };