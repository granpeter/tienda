import React from 'react';
import Constantes from "./Constantes";
import { ToastContainer, toast } from 'react-toastify';
import { Link, Redirect } from 'react-router-dom';

class ListarProductos extends React.Component{

   constructor (props){
        super(props);
          this.state = {
          productos: [],
         };
    }
     
    // implementar la función que dibuja el componente
    async componentDidMount() {
        const respuesta = await fetch("http://localhost:5000/producto"); // si se llama solo la ruta asume petición GET
        const productosTemp = await respuesta.json();
        this.setState ({
            productos:productosTemp,

        });

     }   
 
 //  implementar el render, que es el metodo que dibuja el componente que es una tabla

   render() {
      return (
        <div>
           <div className="column">
              <h1 className="is-size-3">Ver videojuegos</h1>
              <ToastContainer></ToastContainer>
           </div>
           <div className="table-container">
            <table className="table is-fullwidth is-bordered" border="1">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripción</th>
                        <th>Stock </th>
                     
                    </tr>
                </thead>
                <tbody>
                    
                {this.state.productos.map(producto => {
                                return (
                                    <tr>
                                      <td>{producto.nombre}</td>
                                      <td>{producto.precio}</td>
                                      <td>{producto.descripcion}</td>
                                      <td>{producto.stock}</td>
                                      <td>
                                      <Link to={`/productos/editar/${producto._id}`} className="button is-info">Actualizar</Link>
                                      </td>
                                    </tr>
                                );
                          
                                
        
                            
                            
                })}


                    
                   
                </tbody>
            </table>
           </div>
        </div>  




      );


  }// fin de metodo render





}// Fin de clase

export default ListarProductos;