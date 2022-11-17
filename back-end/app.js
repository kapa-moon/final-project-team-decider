let express = require('express'),
  app = express(),
  axios = require('axios'),
  morgan = require('morgan'),
  multer = require('multer'),
  dotenv = require('dotenv'),
  cors = require('cors'),
  body_parser = require('body-parser');
dotenv.config({ silent: true });

app.use(cors());
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(express.json());

const DBconfig = require("./DBconfig");
DBconfig();

const locationRouter = require('./routes/locations');
const groupRouter = require('./routes/groups');
const searchRouter = require('./routes/search');
const userRouter = require('./routes/user');
const loginRouter = require('./routes/login');

app.use('/locations', locationRouter);
app.use('/user', userRouter);
app.use('/groups', groupRouter);
app.use('/search', searchRouter);
app.use('/login', loginRouter);
app.use('/static', express.static('public'));
app.get('/', (req, res) => {
  res.json('');
});

module.exports = app;