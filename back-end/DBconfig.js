const mongoose = require('mongoose');
require('dotenv').config();
let url = process.env.ATLAS_URI;
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