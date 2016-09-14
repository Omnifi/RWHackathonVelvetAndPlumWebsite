/**
 * GET /
 * Home page.
 */

const Product = require('../models/Products');

exports.index = (req, res, next) => {

    Product.find({}).exec(function(err, products) {
        if (err) return next(err);
        res.json({
            success: true,
            products: products
        });
    });
};

exports.one = (req, res, next) => {

    if (!req.params.product_id) return next(new Error('Missing product id'))

    Product.find({_id: req.params.product_id}).exec(function(err, product) {
        if (err || !product) return next(err)
        res.json({
            success: true,
            product: product
        })
    })
};
