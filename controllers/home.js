/**
 * GET /
 * Home page.
 */

const Product = require('../models/Products');

exports.index = (req, res) => {



    const prod = new Product({
        name: 'Shirt'
    });


    prod.save((err) => {
        if (err) {
            return next(err);
        }
        res.render('home', {
            title: 'Home'
        });
    });




};
