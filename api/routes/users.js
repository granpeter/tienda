// Configurar rutasAPI  atendera las peticiones de autenticación y Registro de usuarios
const express= require("express");
const router= express.Router();

// Crear constantes para realizar proceso validación y autenticación.
const bcrypt= require("bcryptjs");
const jwt= require("jsonwebtoken");
const keys= require("../config/keys");


// Cargar la función para validar login
const validateLoginInput= require("../validation/login"); 

// Cargar la función para validar Registro
const validateRegisterInput=require ("../validation/register");

// inicializar y cargar la colección Usuario
const UserModel= require("../modelos/user");

// atender petición post para el login de usuarios
router.post ( "/login", (req,res)  => {
   // validación del formulario
   const {errors,isValid} =  validateLoginInput (req.body);

   if (!isValid){
    return res.status(400).json (errors);
  }
   
  // obtener los campos del cuerpo de la petición payload
  const email = req.body.email;
   const password = req.body.password;


   // encontrar usuario por EMail
    UserModel.findOne ({email}).then (user=>{
      if (!user){
        return res.status(404).json ({emailnotfound:"Email no encontrado"});
       }
       
       // verificar si el password concuerda
       bcrypt.compare (password,user.password).then (encontrado => {
               // si hay concordancia
               if (encontrado) {
                //crear JWT Payload
                const  payload ={
                   id:user.id,
                   name:user.name
                };   

               // sign token  creación del token
               jwt.sign (
                 payload,
                 keys.secretOrKey,
                   {
                  expiresIn:31556926//1 year inseconds 
                  }, 
                  (err,token) => {

                    res.json({
                      sucess:true, // booolean exitosa o fallida la operación
                      token:"Bearer "+token  // el token con la información encriptada el usuario autenticado
                                   
                    });

                  }// fin err,token 

               );// fin de sign


            }else{  // fin de verificación de isMAtch
          
                return res.status(400).json ({passwordincorrect:"Clave Incorrecta"});

            }// fin de else



       }); // fin de función de comparación de password 

   
   
      });


}); //cierre de la función de mapeo para loguearse


// atender petición post para el registro de usuarios

// @route  POST api/users/register
router.post ('/register', (req, res)  => {
 
      // Validación de Form ulario
      const{ errors, isValid} = validateRegisterInput(req.body);
      // Check validation
        if (!isValid) {
          return res.status(400).json(errors);
        }
 
        UserModel.findOne ({ email:req.body.email}).then ( user => {
           if (user){
             return res.status(404).json ({email:"ya existe un usuario registrado con ese email"}); 
           } else {
               const newUser = new UserModel ({
                  name:req.body.name,
                  email:req.body.email,
                  password:req.body.password 
               });
               // Hash password before saving in database
               bcrypt.genSalt ( 10, (err, salt) => {
                 bcrypt.hash (newUser.password,salt,(err, hash)  => {
                      
                       if (err) throw err;
                       newUser.password=hash;// reasignación a password ya con la encriptación
                       newUser.save().then (user => res.json(user))// Guardando en la base datos mongo el usuario registrados
                       .catch(err => console.log (err));
 
                 });
               
               
                });  
          }
 
 
     }); 


});// fin de función  de Registro

module.exports = router;
