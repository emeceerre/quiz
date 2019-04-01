var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var partials = require('express-partials')
<<<<<<< HEAD
var methodOverride = require('method-override');
=======
>>>>>>> 2b79af06844b59e7c4a7cf4a8d2dcea5fc160118

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
<<<<<<< HEAD
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride('_method'));
=======
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
>>>>>>> 2b79af06844b59e7c4a7cf4a8d2dcea5fc160118
app.use(express.static(path.join(__dirname, 'public')));
app.use(partials());

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
<<<<<<< HEAD
            error: err,
            errors: []
=======
            error: err
>>>>>>> 2b79af06844b59e7c4a7cf4a8d2dcea5fc160118
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
<<<<<<< HEAD
        error: {},
        errors: []
=======
        error: {}
>>>>>>> 2b79af06844b59e7c4a7cf4a8d2dcea5fc160118
    });
});


module.exports = app;
