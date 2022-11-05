var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


/*
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
*/
// configurar la ruta de microservicios que atendera las peticiones sobre producto
var enrutadorProducto = require ('./routes/producto')


var app = express();



// me conecta con las peticiones del frontend
app.use((req, res, next) => {
    res.set("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE");
    next();
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
app.use('/', indexRouter);
app.use('/users', usersRouter);
*/
app.use('/producto',enrutadorProducto); // la app del backend use el enrutador PRoducto

module.exports = app;
