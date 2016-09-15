/**
 * GET /
 * Product page.
 */

const Product = require('../models/Products');

exports.index = (req, res, next) => {

    res.render('checkout', {
        title: 'Checkout'
    });

};

exports.remove = (req, res, next) => {

	if(!req.params.product_id) return next(new Error('No product id found'));

	var index = req.session.basket.indexOf(req.params.product_id);
	if(index != -1) req.session.basket.splice( index, 1 );

    res.redirect('/checkout');

};


