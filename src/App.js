import React, { Component } from "react";
import{ BrowserRouter as Router, Route, Switch} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import{ setCurrentUser, logoutUser} from "./actions/authActions";
import { NavLink} from "react-router-dom";
import NavBar from  "./Navbar";
import AgregarProducto from './AgregarProducto';
import ListarProductos from './ListarProductos';
import ActualizarProducto from './ActualizarProducto';
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute  from "./components/PrivateRoute";
import store from "./store";
import Nav from  "./Nav";

console.log ("antes del token");
// Check for token to keep user logged in
if(localStorage.jwtToken) {
console.log ("entro al token");
// Set auth token header auth
const token= localStorage.jwtToken;
setAuthToken(token);
// Decode token and get user info and exp
const decoded= jwt_decode(token);
// Set user and isAuthenticated
store.dispatch(setCurrentUser(decoded));
// Check for expired token
const currentTime= Date.now() / 1000; // to get in milliseconds
    if(decoded.exp< currentTime) {  

      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href= "./login";
   }
}// fin de if token

class App extends Component {


 render ( ) { 
   return (
  
<div> 
    <NavBar/>
    <Route exactpath="/" component={Landing}/>
    <Route exactpath="/register" component={Register}/>


    <div className="section">
      <div className="columns">
         
          <Switch>
        
           <PrivateRoute path="/productos/agregar">
               <AgregarProducto></AgregarProducto> 
            </PrivateRoute >         
            
            <PrivateRoute path="/productos/listar">
              <ListarProductos></ListarProductos>
            </PrivateRoute>

            <PrivateRoute path="/productos/editar/:id">
              <ActualizarProducto></ActualizarProducto>
            </PrivateRoute >
          
           </Switch>

       </div> 


    </div>
 </div>
   
  );
}

}

export default App;
