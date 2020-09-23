var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = 3000;

  var usersRouter = require('./routes/users');
  var indexRouter = require('./routes/index');

  var app = express();
  app.listen(port, () => {
    console.log(`rodou`)
  })

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/index', indexRouter);
  app.use('/users', usersRouter);
 




  
  module.exports = app;
  
  
  
