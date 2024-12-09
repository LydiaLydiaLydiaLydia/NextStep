var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

require('./app_api/models/db');

var indexRouter = require('./app_server/routes/index');
const apiRouter = require('./app_api/routes/index');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_public')));

app.use('/api', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
  

app.use('/', indexRouter);
app.use('/api', apiRouter);

// passport config
var Account = require('./app_api/models/sightings').Account;
passport.use('local', new LocalStrategy( {passReqToCallback : true},
  (req, username, password, done) => {
    console.log('Local strategy verify cb');
    Account.authenticate();
    return done(null, {id: 'test'});
  }
));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
