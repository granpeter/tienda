const Validator = require ("validator");
const isEmpty = require ("is-empty");

module.exports = function validateLoginInput (data) {
 
    let errors = {}; // declaración de arreglo de errores
    // Preparación de Datos
   // convenrtir campos vacios en cadenas vacias para poder usar la funciÖn de validador
  data.email = !isEmpty (data.email) ? data.email:"";  
  data.password = !isEmpty(data.password) ? data.password : "";

  // verificación del email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
    }

// chequeo de campo nombre
if  (Validator.isEmpty (data.name)){
    errors.name = "Campo Nombre Es Obligatorio";
}

// Chequeo de campo email
if  (Validator.isEmpty (data.email)){
    errors.email = "Campo Email Es Requerido";
} else if (!Validator.isEmail(data.email ) ) { // que contenga el caracter @
     errors.email=" Email es invalido"
}

// Password checks
if (Validator.isEmpty(data.password)) {
    errors.password = "Campo Password es requerido";
}
return {
    errors,
    isValid: isEmpty(errors)
    };

}