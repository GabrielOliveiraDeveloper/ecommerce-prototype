import axios from 'axios';
import Shop from '../models/Shop.js';

const createPaymentWithSplit = async (req, res) => {
  const {productOBJ, clientID} = req.body;                                             

  const shop = await Shop.findById(productOBJ.idShop);

  const WOOVI_API_KEY = process.env.WOOVI_API_KEY;
  const WOOVI_API_URL = process.env.WOOVI_API_URL;

  const body = {
  correlationID: `pedido_${Date.now()}`,
  value: productOBJ.price * 100,
  comment: 'Compra no ecommerce-prototype',
  splits: [
    {
      pixKey: shop.pixKey,
      splitType: 'SPLIT_SUB_ACCOUNT', 
      value: productOBJ.price * 100 * 0.9, 
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

    res.send({
      qrCodeImage: response.data.charge.qrCodeImage,
      brCode: response.data.charge.brCode
    });
  } catch (error) {
    console.error('Erro ao gerar Pix:', error.response?.data);
    res.status(500).json({ error: error.response?.data });
  }
};

const webhookPaymentReceived = async (req, res) => {
  res.status(200).json({ message: 'Webhook recebido com sucesso' });
}





export { createPaymentWithSplit, webhookPaymentReceived };