const mongoose = require('mongoose');

const prodSchema = new mongoose.Schema({
    name: { type: String, default: 'Name' },
    price: { type: String, default: '0.00' },
    img: { type: String, default: '/logo.png' },
    desc: { type: String, default: 'Description' },
    nsfw: { type: Boolean, default: false },
    trend: { type: Number, default: 5 }
}, { timestamps: true });

const Product = mongoose.model('Products', prodSchema);

module.exports = Product;
