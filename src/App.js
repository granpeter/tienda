import Nav from "./Nav";
import './App.css';
import { NavLink} from "react-router-dom";
import AgregarProducto from './AgregarProducto';
import ListarProductos from './ListarProductos';
import ActualizarProducto from './ActualizarProducto';
import Navbar from "./Navbar";
import Landing from "./Landing";
import Register from "./Register";
import Login    from "./Login";
import{ Provider} from"react-redux";
import store from"./store";





import {
  Switch,
  Route,
} from "react-router-dom";
import { Fragment } from 'react';
function App() {
    
  return (
  
<div> 
    <Nav></Nav>
     <Navbar/>
     <Landing/>
    <div className="section">
      <div className="columns">

      <Provider store={store}>  
          <Switch>
           
          <Route exactpath="/"component={Landing}/>
          <Route exactpath="/register"component={Register}/>
           <Route exactpath="/login"component={Login}/> 


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
        </Provider>    
       </div> 


    </div>
 </div>
   
  );
}

export default App;
