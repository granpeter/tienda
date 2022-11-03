import React from 'react';

class ListarProductos extends React.Component{

    

    render() {
        return (
            <div>
                <div className="column">
                    <h1 className="is-size-3">Ver Productos </h1>
                    
                </div>
                <div className="table-container">
                    <table className="table is-fullwidth is-bordered" border="1">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Calificación</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }


} // FINALIZA COMPONENTE DE CLASE
export default ListarProductos;