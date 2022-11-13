// 1 (Configurar base de datos en el proyecto). Crear Modelo con Colección User
const mongoose = require('../conexion_mongo');
// Create Schema
const Schema= mongoose.Schema;
const UserSchema= new Schema ({
name:{
type:String,
required:true,
},
email:{
type:String,
required:true,
},
password:{
type:String,
required:true,
},
date:{
type:Date,
default:Date.now,
},
});
const User = mongoose.model("users", UserSchema);
module.exports= User;