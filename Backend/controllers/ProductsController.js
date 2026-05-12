import Product from '../models/Product.js'; 
import FormData from 'form-data';
import axios from 'axios';
const IMGBB_API_KEY = process.env.IMGBB_API_KEY;

const createProduct = async (req, res) => {
    const { name, price, description, shopID } = req.body;

    if (!req.file) {
            return res.status(400).send('Nenhum arquivo enviado.');
    }

    const form = new FormData();
    form.append('image', req.file.buffer.toString('base64'));

    const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        form,
        { headers: { ...form.getHeaders() } }
    );

    const imageUrl = response.data.data.url;
    const deleteUrl = response.data.data.delete_url; 
        
    console.log('URL da Imagem:', imageUrl);

    const newProduct = {
        name,
        price,
        description,
        idShop: shopID
    };

    try {
        const product = new Product(newProduct);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    }
    catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

const getProducts = async (req, res) => {
    const { shopID } = req.params;

    try {        
        const products = await Product.find({ idShop: shopID });
        res.json(products);
    }
    catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

const getProductById = async (req, res) => {
    const { productID } = req.params;

    try {
        const product = await Product.findById(productID);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(product);
    }
    catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

const getProductsByShopId = async (req, res) => {
    const { shopID } = req.params;

    try {
        const products = await Product.find({
            idShop: shopID
        });
        res.json(products);
    }
    catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const updateProduct = async (req, res) => {

}

const deleteProduct = async (req, res) => {

}   

export {
    createProduct,
    getProducts,
    getProductById,
    getProductsByShopId,
    updateProduct,
    deleteProduct
}