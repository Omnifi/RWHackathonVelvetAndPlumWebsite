/**
 * GET /
 * Product page.
 */

const Product = require('../models/Products');

exports.index = (req, res, next) => {


    // Product.find({_id: req.params.product_id}).exec(function(err, product) {
    //     if (err) return next(err);
        res.render('checkout', {
            title: 'Checkout'
        });
    // });

};
