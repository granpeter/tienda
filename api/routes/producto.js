var express = require('express');
var router = express.Router();

var Producto = require("../modelos/modeloTienda");

// este método atiende la petición de guardar producto
router.post('/', async function (req, res, next) {
    const producto = new Producto({
    nombre: req.body.nombre,
    precio: req.body.precio,
    descripcion: req.body.descripcion,
    stock :req.body.stock,
    iva:req.body.iva,
  });
  await producto.save();
  res.send(producto);
});

// funcion que atiende peticiones get  en el mapeo /productos
router.get('/', async function (req, res, next) {
   const productos= await Producto.find(); // metodo para listar todos los productos
   res.send(productos);

});

module.exports = router;