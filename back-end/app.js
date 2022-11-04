let express = require('express'),
app = express(),
axios = require('axios'),
morgan = require('morgan'),
multer = require('multer'),
dotenv = require('dotenv'),
cors = require('cors'),
list = require('./list');
dotenv.config({silent: true});

app.use(cors());
app.use('/search', (req, res) =>
{
  console.log('search');
});

app.use("/static", express.static("public"));

app.get('/', (req, res) =>
{
  res.send('');
});

app.get('/api/get_list', (req, res) =>
{
  res.json(list);
});

module.exports = app;