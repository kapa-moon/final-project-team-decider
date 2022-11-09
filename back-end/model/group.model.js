const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    id: { type: String, required: false},
    idx: { type: String, required: false, default: 0},
}, {timestamps: true});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;