import React from 'react';
import Constantes from "./Constantes";
import { ToastContainer, toast } from 'react-toastify';
import { Link, Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';

class ListarProductos extends React.Component{

   constructor (props){
        super(props);
          this.state = {
          productos: [],
         };
         this.eliminar = this.eliminar.bind(this);
       }

     
    // implementar la función que dibuja el componente
    async componentDidMount() {
        const respuesta = await fetch("http://localhost:5000/producto"); // si se llama solo la ruta asume petición GET
        const productosTemp = await respuesta.json();
        this.setState ({
            productos:productosTemp,

        });

     }   
 
    async eliminar(evento) {
      
      let idProducto= evento.target.value;
      const resultado = await Swal.fire({
          title: 'Confirmación',
          text: `¿ Confirma Eliminar "`,
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3298dc',
          cancelButtonColor: '#f14668',
          cancelButtonText: 'No',
          confirmButtonText: 'Sí, eliminar'
      });
      // Si no confirma, detenemos la función
      if (!resultado.value) {
          return;
      }
      const respuesta = await fetch(`${Constantes.RUTA_API}/`+idProducto, {
          method: "DELETE",
      });
      const exitoso = await respuesta.json();
      if (exitoso) {
          toast('Producto eliminado ', {
              position: "top-left",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
          });
          this.setState({
              eliminado: true,
          });
      } else {
          toast.error("Error eliminando. Intenta de nuevo");
      }
     
  } // fin de función eliminar
 
 
 
     //  implementar el render, que es el metodo que dibuja el componente que es una tabla

   render() {
      
    if (this.state.eliminado) {
      return null;
    }
    
     return (
        
        <div>
           <div className="column">
              <h1 className="is-size-3">Ver Productos</h1>
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
                        <th>Opciones</th>
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
                                      <td>
                                        <button onClick={this.eliminar} value={producto._id} className="button is-danger" >Eliminar</button>
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