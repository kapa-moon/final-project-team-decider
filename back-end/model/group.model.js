const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    idx: { type: String, required: false },
    // array of location objects
    locations: { type: Array, required: false },
    selectedLocation: { type: Object, required: false },
}, { timestamps: true });

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;