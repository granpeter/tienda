import logo from './logo.svg';
import Nav from "./Nav";
import './App.css';
import { NavLink} from "react-router-dom";
import AgregarProducto from './AgregarProducto';
import ListarProductos from './ListarProductos';
import ActualizarProducto from './ActualizarProducto';

import {
  Switch,
  Route,
} from "react-router-dom";
import { Fragment } from 'react';
function App() {
    
  return (
  
<div> 
    <Nav></Nav>
    <div className="section">
      <div className="columns">
         
          <Switch>
          
           <Route path="/productos/agregar">
               <AgregarProducto></AgregarProducto> 
            </Route>         
            
            <Route path="/productos/listar">
              <ListarProductos></ListarProductos>
            </Route>

            <Route path="/productos/editar/:id">
              <ActualizarProducto></ActualizarProducto>
            </Route>
          
           </Switch>

       </div> 


    </div>
 </div>
   
  );
}

export default App;
