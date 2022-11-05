var express = require('express');
var router = express.Router();

var ProductoModelo = require("../modelos/modeloTienda");// importando el modelo Mongo a Express

// este método atiende la petición de guardar producto
router.post('/', async function (req, res, next) {
    const producto = new ProductoModelo({  // representación JSON del producto
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
   const productos= await ProductoModelo.find(); // metodo para listar todos los productos
   res.send(productos);

});

// función que me permita buscar el producto a partir de su _id
router.get('/:id', async function (req, res) {
  const producto = await ProductoModelo.findById(req.params.id);
  res.send(producto);
});

module.exports = router;

// función que se encargue de actualizar producto
router.put('/',async function (req, res) {
    await ProductoModelo.findByIdAndUpdate ({
         _id:req.body._id,
    } , {
         nombre: req.body.nombre,
         precio: req.body.precio,
         descripcion: req.body.descripcion,
         stock :req.body.stock,
         iva:req.body.iva

        }
    );
    res.send(true);
   });


   // definir mi función para eliminar el producto
   router.delete('/:id', async function (req, res) {
     await ProductoModelo.findByIdAndDelete({ _id: req.params.id })
     res.send(true)
    
   })
  

