import logo from './logo.svg';
import './App.css';
import { NavLink} from "react-router-dom";
import AgregarProducto from './AgregarProducto';
import ListarProductos from './ListarProductos';
import {
  Switch,
  Route,
} from "react-router-dom";
import { Fragment } from 'react';
function App() {
    
  return (
  <Fragment>
    <div id="menuSuperior">
         <table border="1">
            <tr>
               <td> <NavLink  activeClassName="is-active" className="navbar-item" to="/productos/agregar">Agregar Producto</NavLink></td>
               <td><NavLink  activeClassName="is-active" className="navbar-item" to="/productos/listar">Listar Producto</NavLink></td>
            </tr>
         </table>

    </div>
   
    <div className="section">
      <div className="columns">
         
          <Switch>
          
           <Route path="/productos/agregar">
               <AgregarProducto></AgregarProducto> 
            </Route>         
            
            <Route path="/productos/listar">
              <ListarProductos></ListarProductos>
            </Route>
          
           </Switch>

       </div> 


    </div>

    </Fragment> 
  );
}

export default App;
