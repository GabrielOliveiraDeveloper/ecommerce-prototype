import axios from 'axios';

const createPaymentWithSplit = async (req, res) => {
    const { product, client } = req.body;

    const WOOVI_API_URL = process.env.WOOVI_API_URL;
    const WOOVI_API_KEY = process.env.WOOVI_API_KEY;

    const body = {
    correlationID: `pedido_${Date.now()}`,
    value: '1000', 
    comment: 'Compra no ecommerce-prototype',

    splits: [
      {
        pixKey: "pixKeyDoVendedor", 
        splitType: 'PERCENTAGE',
        value: 9000, 
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

    return {
      qrCodeImage: response.data.charge.qrCodeImage,
      brCode: response.data.charge.brCode 
    };

    res.send(response.data);
  } catch (error) {
    console.error('Erro ao gerar Pix:', error.response.data);
  }
};



export { createPaymentWithSplit };