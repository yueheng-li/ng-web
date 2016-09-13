var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// mongodb new lib add
//var mongo = require('mongodb');
//var monk = require('monk');
//var db = monk('localhost:27017/bookdb');

var routes = require('./routes/index');
var users = require('./routes/users');
var books = require('./routes/books');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/////////////////// route setting //////////////////////////////////
app.use('/', routes);
app.use('/users', users);
app.use('/books', books);
/////////////////////////////////////////////////////


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.status(404);
  res.json({
    'http_status': '404',
    'url': req.originalUrl,
    'error': 'Not found'
  });
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    'http_status': err.status,
    'url': req.originalUrl,
    'error': err
  });
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


/////////////////////mongodb connect//////////////////////////
connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function listen () {
  console.log('Express app started on port ' + 3333);
}

function connect () {
  return mongoose.connect('localhost:27017/bookdb').connection;
}
///////////////////////////////////////////////

module.exports = app;
