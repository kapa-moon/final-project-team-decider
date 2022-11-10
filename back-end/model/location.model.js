const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    group_id: { type: String, required: true },
    name: { type: String, required: true },
    location_address: { type: String, required: true },
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    type: { type: String, required: false },
    category: { type: String, required: false },
    distance : { type: Number, required: false },
    image: { type: String, required: false },
    vote: { type: Number, required: false },
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;