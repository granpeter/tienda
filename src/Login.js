import React,{Component} from"react";
import {Link} from"react-router-dom";

class Login extends Component{

    constructor(){
        super();
         this.state={
          email:"", 
           password:"",
           errors:{}
         };
     }

     onChange=e=>{
        this.setState({[e.target.id]:e.target.value});
     };

     onSubmit=e=>{  // ejecuta cuando click sobre el boton login 

        e.preventDefault();
        const userData={
            email:this.state.email,
            password:this.state.password
        }      
        console.log(userData);
    
     };// fin de la funcion onSubmit   
      

     render() {
     return (
        <div className="container">
            <div style={{ marginTop:"4rem"}}className="row">
                <div className="col s8 offset-s2">
                      <Link to="/"className="btn-flat waves-effect">
                        <i className="material-icons left">keyboard_backspace</i>Back to
                        home
                      </Link>

                      <div className="col s12"style={{ paddingLeft:"11.250px"}}>

                           <h4><b>Login</b>below </h4>
                            <p className="grey-text text-darken-1">
                               No tiene una cuenta <Link to="/register">Registrese</Link>
                             </p>
                      </div>   


                    <form noValidateonSubmit={this.onSubmit}>

                      <div className="input-field col s12">
                           <input
                                onChange={this.onChange}
                                value={this.state.email}
                                error={this.errors.email}
                                id="email"
                                type="email"
                            />
                            <label htmlFor="email">Email</label> 
                         </div>    

                           <div className="input-field col s12">
                               <input
                                  onChange={this.onChange}
                                  value={this.state.password}
                                  error={this.errors.password}
                                  id="password"
                                  type="password"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                          <div className="col s12"style={{ paddingLeft:"11.250px"}}>
                            <button
                             style={{
                              width:"150px",
                              borderRadius:"3px",
                              letterSpacing:"1.5px",
                              marginTop:"1rem"
                             }}
                            type="submit"
                            className="btnbtn-large waves-effect waves-light hoverableblue accent3"
                            >
                           Login
                           </button>
                          </div>
                   </form> 
                </div>
            </div>
        </div>
      );// fin return

     } // fin de render   



} // fin de Clase Component