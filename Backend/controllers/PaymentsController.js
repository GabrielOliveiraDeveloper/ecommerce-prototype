import axios from 'axios';
import Shop from '../models/Shop.js';
import Order from '../models/Order.js';

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

    console.log('Resposta da Woovi:', response.data.charge.identifier);

    const order = new Order({
      shopID: productOBJ.idShop,
      chargeID: response.data.charge.identifier,
      productID: productOBJ._id,
      qrCode: response.data.charge.qrCodeImage,
      brCode: response.data.charge.brCode,
      clientID: clientID,
    });

    await order.save();  

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
  try {
    const { charge } = req.body;

    if (charge.status === 'COMPLETED') {
      const order = await Order.findOne({ chargeID: charge.identifier });

      if (!order) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
      }

      order.status = 'PAID';
      order.paidAt = new Date();
      order.transactionID = charge.transactionID; 
      await order.save();


      console.log(`Pagamento confirmado para pedido: ${order._id}`);

      return res.status(200).json({ 
        success: true, 
        message: 'Pagamento processado com sucesso' 
      });
    }

    if (charge.status === 'CANCELLED' || charge.status === 'EXPIRED') {
      const order = await Order.findOne({ chargeID: charge.identifier });
      
      if (order) {
        order.status = 'CANCELLED';
        await order.save();
      }
    }

    res.status(200).json({ message: 'Webhook processado' });

  } catch (error) {
    console.error('Erro ao processar webhook:', error);
    res.status(500).json({ error: 'Erro ao processar webhook' });
  }
};




export { createPaymentWithSplit, webhookPaymentReceived };