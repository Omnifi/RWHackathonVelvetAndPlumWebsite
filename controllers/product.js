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
