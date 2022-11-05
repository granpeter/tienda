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
  });
  await producto.save();
  res.send(producto);
});

module.exports = router;