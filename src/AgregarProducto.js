import React from 'react';


class AgregarProducto extends React.Component {
   
    constructor(props) { // constructor del componente agregar productos
        super(props);
        this.state = { // cada objeto tiene un estado y ese estado viene determinado por los valores de sus atributos
            productos: {
                "nombre": "",
                "precio": 0,
                "descripcion": "",
                "stock":0,
            },
        };
   }

  // dibujar formulario para agregar Producto
  
  render(){
    return (

        <div className="column is-one-third">
            <h1 className="is-size-3">Agregar Producto</h1>
            
            <form className="field" >
                <div className="form-group">
                    <label className="label" htmlFor="nombre">Nombre:</label>
                    <input autoFocus required placeholder="Nombre" type="text" id="nombre"  className="input" />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="precio">Precio:</label>
                    <input required placeholder="Precio" type="number" id="precio"  className="input" />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="descripcion">Descripción:</label>
                    <input required placeholder="Descripción" type="text" id="descripcion"  className="input" />
                </div>
                
                <div className="form-group">
                    <label className="label" htmlFor="stock">Stock:</label>
                    <input required placeholder="stock" type="text" id="stock"  className="input" />
                </div>

                <div className="form-group">
                    <button className="button is-success mt-2">Guardar</button>
                    &nbsp;
                  
                </div>
            </form>
        </div>




    );

}    



}// cierre del Componente de Clase Agregar Produtor

export default AgregarProducto;