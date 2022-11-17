let mongoose = require("mongoose"),
    schema = mongoose.Schema;

let user_schema = new schema
    ({
        user_id: { type: String, required: true },
        name: { type: String, required: false },
        email: { type: String },
        hash: { type: String },
        my_location: { type: String, required: false },
        my_groups: { type: Array, required: true },
        current_group: { type: Object, required: true },
        voted_locations: { type: Array, required: true },
    });

let user = mongoose.model('user', user_schema);
module.exports = user;
