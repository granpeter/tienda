import React from 'react';
import Constantes from "./Constantes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

class AgregarProducto extends React.Component {
   
    constructor(props) { // constructor del componente agregar productos
        super(props);
        this.state = { // cada objeto tiene un estado y ese estado viene determinado por los valores de sus atributos
            producto: {
                "nombre": "",
                "precio": "",
                "descripcion": "",
                "stock":"",
                "iva":"",
            },
        };

         // Indicarle a las funciones a quién nos referimos con "this"
         this.manejarCambio = this.manejarCambio.bind(this);
         // registrar la función que atendera el post
         this.manejarEnvioDeFormulario=this.manejarEnvioDeFormulario.bind(this);
   }

  // dibujar formulario para agregar Producto
  
  render(){
    return (

        <div className="column is-one-third">
            <h1 className="is-size-3">Agregar Producto</h1>
            
            <form className="field"  onSubmit={this.manejarEnvioDeFormulario}>
                <div className="form-group">
                    <label className="label" htmlFor="nombre">Nombre:</label>
                    <input autoFocus required placeholder="Nombre" type="text" id="nombre" onChange={this.manejarCambio} value={this.state.producto.nombre}   className="input"  />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="precio">Precio:</label>
                    <input required placeholder="Precio" type="number" id="precio"  className="input"  onChange={this.manejarCambio} value={this.state.producto.precio} />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="descripcion">Descripción:</label>
                    <input required placeholder="Descripción" type="text" id="descripcion"  className="input" onChange={this.manejarCambio} value={this.state.producto.descripcion} />
                </div>
                
                <div className="form-group">
                    <label className="label" htmlFor="stock">Stock:</label>
                    <input required placeholder="stock" type="number" id="stock"  className="input"  onChange={this.manejarCambio} value={this.state.producto.stock} />
                </div>


                <div className="form-group">
                    <label className="label" htmlFor="iva">Iva:</label>
                    <input required placeholder="iva" type="number" id="iva"  className="input"  onChange={this.manejarCambio} value={this.state.producto.iva} />
                </div>

                <div className="form-group">
                    <button className="button is-success mt-2">Guardar</button>
                    &nbsp;
                  
                </div>
            </form>
        </div>




    );
 
}    

  /* actualizar el estado del componente clase llamado AgregarProducto
       que viene definido por los atributos del objeto producto que en su orden son:
    */
manejarCambio(evento) {
   
   
    // Extraer la clave del estado que se va a actualizar, así como el valor
    const clave = evento.target.id;
    let valor = evento.target.value;
    this.setState(state => {
        const productoActualizado = state.producto;  // objeto temporal para guarda el objeto actulizado
        // Si es la calificación o el nombre, necesitamos castearlo a entero
        if (clave !== "nombre"  && clave!=="descripcion") {
            valor = parseFloat(valor);
        }
        // Actualizamos el valor del videojuego, solo en el campo que se haya cambiado
        productoActualizado[clave] = valor;
        
        return {
            producto: productoActualizado,
        }
    });
    
    

}

/*
   ENVIO DE FORMULARIOS.
*/
async manejarEnvioDeFormulario(evento) {

    evento.preventDefault();
    // Codificar nuestro PRODUCTO como JSON
     const cargaUtil = JSON.stringify(this.state.producto);
    // ¡Y enviarlo!
    const respuesta = await fetch(`${Constantes.RUTA_API}`, { //invocar un microservicio que esta en el backend (Express)
        method: "POST",
        body: cargaUtil,
        headers: {
            "Content-Type":"application/json",
        }
    });
    const exitoso = await respuesta.json();
    if (exitoso) {
        // reinicialiceme el estado del objeto producto
        this.setState({
            producto: {
                "nombre": "",
                "precio": "",
                "descripcion": "",
                "stock":"",
                "iva":"",
            }
        });
    } else {
        alert("Error guardando. Intenta de nuevo");
    }
}




}// cierre del Componente de Clase Agregar Produtor

export default AgregarProducto;