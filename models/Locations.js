const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: { type: String, default: 'Name' },
    address: { type: String, default: 'Address' },
    geo: { type: [Number], index: '2dsphere' },
    beacon_id: { type: String, default: '000' },
    player_id: { type: String, default: '000' }
}, { timestamps: true });

const Locations = mongoose.model('Locations', locationSchema);

module.exports = Locations;
