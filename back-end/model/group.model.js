const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    idx: { type: String, required: true, unique: true},
    grouplist: { type: String, required: false}
}, {timestamps: true});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;