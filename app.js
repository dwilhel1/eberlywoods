const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const hbs = require('hbs');

const indexRouter = require('./routes/index');
const galleryRouter = require('./routes/gallery');
const servicesRouter = require('./routes/services');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerHelper('currentYear', function() {
  const year = new Date().getFullYear();

  return new hbs.SafeString(year);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/gallery', galleryRouter);
app.use('/services', servicesRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);

// HTTP 404 Handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error Handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
