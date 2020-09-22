var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var consign = require('consign');

  var usersRouter = require('./routes/users');
  var indexRouter = require('./routes/index');

  var app = express();

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/index', indexRouter);
  app.use('/users', usersRouter);
 
  consign({
    cwd: 'app',
    verbose: process.env.APP_DEBUG == true || false,
    locale: 'pt-br'
  }).include('../src/controllers').into(app);

  
  module.exports = app;
  
  
  
