const mongoose = require('mongoose');
require('dotenv').config();
let db_config = require('./db_config');
let url = db_config.ATLAS_URI; /* const url = process.env.ATLAS_URI; */
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
  };


async function DBconfig() {
    mongoose.connect(url, options).then(() => {console.log('Database connection established!');},
        err => {console.log('Error connecting Database instance due to: ', err);}
      );
}

module.exports = DBconfig;