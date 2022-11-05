import logo from './logo.svg';
import Nav from "./Nav";
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
          
           </Switch>

       </div> 


    </div>
 </div>
   
  );
}

export default App;
