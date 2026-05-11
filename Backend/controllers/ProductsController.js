import Product from '../models/Product.js'; 

const createProduct = async (req, res) => {
    const { name, price, description, shopID } = req.body;

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