/**
 * GET /
 * Home page.
 */

const Location = require('../models/Locations');

exports.index = (req, res) => {

    Location.find({}).exec(function(err, locations) {
        if (err) return next(err);
        res.json({
            success: true,
            locations: locations
        });
    });

};
