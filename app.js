'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors')
const app = express();
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const rp = require('request-promise');
const cookieSession = require('cookie-session');
app.use(cors())

const index = require('./routes/index');
const users = require('./routes/users');
const facilities = require('./routes/facilities');
const units = require('./routes/units');
const boxes = require('./routes/boxes');
const tenents = require('./routes/tenents');
const items = require('./routes/items');




app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/api/users', users);
app.use('/api/facilities', facilities);
app.use('/api/units', units);
app.use('/api/boxes', boxes);
app.use('/api/tenents', tenents);
app.use('/api/items', items);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.json({err: err});
});

module.exports = app;
