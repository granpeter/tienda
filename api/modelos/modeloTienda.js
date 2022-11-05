const mongoose = require('../conexion_mongo');
const Producto = mongoose.model('Producto', {
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
        min: 0,
    },
    descripcion: {
        type: String,
        required: true,
        
    },
    stock: {
        type: Number,
        required: true,
    },
     
    iva:{
        type: Number,
        required: true, 
    },

});
module.exports = Producto;