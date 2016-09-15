/**
 * GET /
 * Facebook get user
 */

const User = require('../models/User');

exports.index = (req, res, next) => {

    if (!req.params.user_id) return res.json({
        success: false
    })

    User.find({ facebook: req.params.user_id }).exec(function(err, user) {
        if (err) return res.json({
            success: false
        })
        res.json({
            success: true,
            user: user
        })
    });



};
