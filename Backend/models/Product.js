const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    idShop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shop',
        required: true
    }
});

const Product =  mongoose.model('Product', ProductSchema);

export default Product;