import mongoose from 'mongoose';

const ShopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',                        
        required: true                      
    },
    products: [{
        name: String,
        price: Number,
        description: String
    }]
}, { timestamps: true });

const Shop = mongoose.model('Shop', ShopSchema);
export default Shop;