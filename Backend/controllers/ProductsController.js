import Product from '../models/Product.js'; 
import FormData from 'form-data';
import axios from 'axios';
const IMGBB_API_KEY = process.env.IMGBB_API_KEY;

const createProduct = async (req, res) => {
    const { name, price, description, shopID } = req.body;

    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'No files uploaded.' });
    }

    try {
        const uploadPromises = req.files.map(async (file) => {
            const form = new FormData();
            form.append('image', file.buffer.toString('base64'));

            const response = await axios.post(
                `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
                form,
                { headers: { ...form.getHeaders() } }
            );

            return response.data.data.url;
        });

        const imageUrls = await Promise.all(uploadPromises);

        const product = new Product({
            name,
            price,
            description,
            idShop: shopID,
            imagesUrls: imageUrls
        });

        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

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
    const { id } = req.params;
    const { name, price, description } = req.body;

    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'No files uploaded.' });
    }

    try {
        const uploadPromises = req.files.map(async (file) => {
            const form = new FormData();
            form.append('image', file.buffer.toString('base64'));

            const response = await axios.post(
                `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
                form,
                { headers: { ...form.getHeaders() } }
            );

            return response.data.data.url;
        });

        const imageUrls = await Promise.all(uploadPromises);

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                name,
                price,
                description,
                imagesUrls: imageUrls
            },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}  

const returnAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export {
    createProduct,
    getProducts,
    getProductById,
    getProductsByShopId,
    updateProduct,
    deleteProduct,
     returnAllProducts
}