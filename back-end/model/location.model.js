const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    group_id: { type: String, required: true },
    location_name: { type: String, required: true },
    location_address: { type: String, required: true },
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;