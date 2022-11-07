const mongoose = require('mongoose');
ATLAS_URI='mongodb+srv://yvonne511:Wyy511010209!@cluster0.t80fgbl.mongodb.net/?retryWrites=true&w=majority'
require('dotenv').config()
const url = process.env.ATLAS_URI;
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