const Validator=require("validator");
const isEmpty=require("is-empty");

module.exports = function validateRegisterInput (data){
    let errors = {};// arreglo de errores

    // convertir campos vacios a cadena de textos vacias
    data.name  = !isEmpty(data.name) ? data.name : "" ;
    data.email = !isEmpty (data.email) ? data.email:"";
    data.password = !isEmpty (data.password) ? data.password :"";
    data.password2 =  !isEmpty (data.password2) ? data.password2:"";

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

     // chequeo de campo password
     if ( Validator.isEmpty(data.password)){
        errors.password =" Campo password es obligatorio"
     }

     if (Validator.isEmpty(data.password2)){
        errors.password2 =" El campo confirmación del password es obligatorio"
     }
   

     if (!Validator.isLength(data.password, {min:6,max:30} )){
        errors.password2 = " El password debe tener al menos 6 caracteres y máximo 30 caracteres"
    }


    if (!Validator.equals (data.password,data.password2)){
        errors.password2 = " Password y Confirmación coincidar debe coincidir"
     }
     
     // Retorna un arreglo de errores y si fue valida la verificación
     return {
        errors, // arreglo de errores
        isValid:isEmpty (errors)  // valor booleano que me define si es valida o no la verificación
     };


}// fin de función validar Registro de entrada