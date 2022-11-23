let mongoose = require("mongoose"),
    schema = mongoose.Schema;

let user_schema = new schema
    ({
        user_id: { type: String, unique: true },
        username: { type: String, unique: true },
        email: { type: String },
        hash: { type: String },
        my_location: { type: String },
        my_groups: { type: Array },
        current_group: { type: Object },
        voted_locations: { type: Array },
    });

let user = mongoose.model('user', user_schema);
module.exports = user;
