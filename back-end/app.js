let express = require('express'),
app = express(),
axios = require('axios'),
morgan = require('morgan'),
multer = require('multer'),
dotenv = require('dotenv'),
cors = require('cors'),
body_parser = require('body-parser'),
list = require('./list');
dotenv.config({silent: true});

let search_keyword = '',
a = []; /* matching results */

app.use(cors());
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());
app.use(express.json());

const DBconfig = require("./DBconfig");
DBconfig();

const locationRouter = require('./routes/locations');
const groupRouter = require('./routes/groups');

app.use('/locations', locationRouter);
app.use('/groups', groupRouter);


app.use("/static", express.static("public"));

app.get('/', (req, res) =>
{
  res.send('');
});

app.get('/api/print_list', (req, res) =>
{
  res.json(list);
});

app.get('/api/get_list', (req, res) =>
{
  a = [];
  field_array = [];
  for(let i in list[0])
    field_array.push(i);
  for(let i = 0; i < list.length; ++i)
  {
    for(let j = 0; j < field_array.length; ++j)
    {
      if(list[i][field_array[j]].toString().toLowerCase().includes(search_keyword.toString().toLowerCase()))
      {
        a.push(list[i]);
        break;
      }
    }
  }
  res.json(a);
});

app.get('/search', (req, res) =>
{
  res.json(a);
});

app.post('/search', (req, res) =>
{
  search_keyword = req.body; 
  res.json(req.body);
});



module.exports = app;