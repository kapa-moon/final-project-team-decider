let mongoose = require("mongoose"),
schema = mongoose.Schema;

let user_schema = new schema
({
    name: {type: String, required: false},
    email: {type: String},
    password: {type: String},
});

let user = mongoose.model('user', user_schema);
module.exports = user;
