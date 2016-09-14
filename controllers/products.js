/**
 * GET /
 * Home page.
 */

const Product = require('../models/Products');

exports.index = (req, res) => {


    Product.find({}).exec(function(err, products) {
        if (err) return next(err);
        res.json({
            success: true,
            products: products
        });
    });

};
