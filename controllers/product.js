/**
 * GET /
 * Product page.
 */

const Product = require('../models/Products');

exports.index = (req, res, next) => {

    if (!req.params.product_id) {
        Product.findOne().exec(function(err, product) {
            if (err) return next(err);
            res.render('product', {
                title: 'Product',
                product: product
            });
        });
    } else {
        Product.find({ _id: req.params.product_id }).exec(function(err, product) {
            if (err) return next(err);
            res.render('product', {
                title: 'Product',
                product: product[0]
            });
        });
    }

};


exports.add = (req, res, next) => {
    if (!req.params.product_id) return next(new Error('No product id'));
    if (!req.session.basket) req.session.basket = [];
    if (req.session.basket.indexOf(req.params.product_id) < 0) req.session.basket.push(req.params.product_id);
    res.redirect('/product/' + req.params.product_id);
};
