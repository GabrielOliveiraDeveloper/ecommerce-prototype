import Shop from '../models/Shop.js';

const createShop = async (req, res) => {
    const { name, description, category, ownerID } = req.body;

    const newShop = new Shop({
        name,
        description,
        category,
        owner: ownerID
    });

    try {
        const savedShop = await newShop.save();
        res.status(201).json(savedShop);
    }
    catch (error) {
        console.error('Error creating shop:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

const getShops = async (req, res) => {
    try {
        const shops = await Shop.find().populate('owner', 'name email');
        res.json(shops);
    }
    catch (error) {
        console.error('Error fetching shops:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getShopById = async (req, res) => {
    const { id } = req.params;

    try {
        const shop = await Shop.findById(id).populate('owner', 'name email');
        if (!shop) {
            return res.status(404).json({ message: 'Shop not found' });
        }

        res.json(shop);
    }
    catch (error) {
        console.error('Error fetching shop:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const updateShop = async (req, res) => {
    const { id } = req.params;
    const { name, description, category } = req.body;
    try {
        const updatedShop = await Shop.findByIdAndUpdate(id, { name, description, category }, { new: true });
        if (!updatedShop) {
            return res.status(404).json({ message: 'Shop not found' });
        }

        res.json(updatedShop);
    }
    catch (error) {
        console.error('Error updating shop:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteShop = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedShop = await Shop.findByIdAndDelete(id);
        if (!deletedShop) {
            return res.status(404).json({ message: 'Shop not found' });
        }

        res.json({ message: 'Shop deleted successfully' });
    }
    catch (error) {
        console.error('Error deleting shop:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getShopsIDByOwner = async (req, res) => {
    const { ownerID } = req.params;

    try {
        const shops = await Shop.find({ owner: ownerID }, '_id');
        res.json(shops);
    }
    catch (error) {
        console.error('Error fetching shops by owner:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const createProduct = async (req, res) => {
    const { name, price, description, shopID } = req.body;

    const newProduct = {
        name,
        price,
        description
    };

    try {
        const shop = await Shop.findById(shopID);
        if (!shop) {
            return res.status(404).json({ message: 'Shop not found' });
        }

        shop.products.push(newProduct);
        await shop.save();

        res.status(201).json(newProduct);
    }
    catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

const getProducts = async (req, res) => {
    const { shopID } = req.params;

    try {        
        const shop = await Shop.findById(shopID);
        if (!shop) {
            return res.status(404).json({ message: 'Shop not found' });
        }
        res.json(shop.products);
    }
    catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

const getProductById = async (req, res) => {
    const { shopID, productID } = req.params;

    try {
        const shop = await Shop.findById(shopID);
        if (!shop) {
            return res.status(404).json({ message: 'Shop not found' });
        }

        const product = shop.products.id(productID);
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

const updateProduct = async (req, res) => {

}

const deleteProduct = async (req, res) => {

}


export {
    createShop,
    getShops,
    getShopById,
    updateShop,
    deleteShop,
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};