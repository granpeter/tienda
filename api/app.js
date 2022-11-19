var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const passport=require("passport");

/*
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
*/
// configurar la ruta de microservicios que atendera las peticiones sobre producto
var enrutadorProducto = require ('./routes/producto')
// configurar el enrutador que atendera las peticiones de autenticación y registro de usuarios
var users = require ("./routes/users");



var app = express(); // inicializa la aplicación express


// 5. aplicamos función middleware para codificar en formato json la peticiones de autenticación y registro de usuarios
app.use(
    bodyParser.urlencoded({
      extended:false
    })
);
app.use (bodyParser.json ());

// 5. configurar la conexión a la base datos mongo para autenticar y registrar usuarios
// DB Config
const db= require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose.connect(
  db,
   { useNewUrlParser:true}
 )
.then(() =>console.log("La conexión a MongoDB fue exitosa"))
.catch(err=>console.log(err));




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

//Passport middleware
app.use(passport.initialize());
//Passportconfig
require("./config/passport")(passport);
//Routes

app.use("/users",users);
app.use('/producto',enrutadorProducto); // la app del backend use el enrutador PRoducto

module.exports = app;
