import React, {Component} from "react";
import {Link}  from "react-router-dom";

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
 
        onSubmit=e=>{
            e.preventDefault();
            const userData={
            email:this.state.email,
            password:this.state.password
        };
        console.log(userData);
        };
       
       
       render(){
            const{ errors} = this.state;
            return (
                <div className="container">
              
                <div className="row">
                   
                   <div className="cols8offset-s2">
                     
                      <Link  to="/"className="btn-flatwaves-effect">
   <                      i className="material-iconsleft">keyboard_backspace</i>Regreso a Principal
                      </Link>
   
                      <div className="cols12"style={{paddingLeft:"11.250px"}}>
                          <h4>
                             <b>Register</b>below
                           </h4>
                         <p className="grey-texttext-darken-1">
                            ya tiene una cuenta?<Link to="/login">Login</Link>
                         </p>
   
                       </div>
   
                       <form noValidateonSubmit={this.onSubmit}>
                         
                             <div className="input-fieldcols12">
                               <input
                                  onChange={this.onChange}
                                  value={this.state.email}
                                  error={errors.email}
                                  id="email"
                                  type="text"
                                 />
                                <label htmlFor="email">Correo</label>
                             </div>
 
   
                           <div className="input-field col s12">
                             <input
                               onChange={this.onChange}
                               value={this.state.password}
                               error={errors.password}
                               id="password"
                               type="password"
                              /> 
                              <label htmlFor="password">Contraseña</label>
                            </div>
   
                              
                            <div className="col s12"style={{ paddingLeft:"11.250px"}}>
                               <button style={{
                                  width:"150px",
                                   borderRadius:"3px",
                                   letterSpacing:"1.5px",
                                   marginTop:"1rem"
                                   }}
                                   type="submit"
                                  className="btnbtn-large waves-effect waves-light hoverableblue accent3"
                                >Login</button>
                            </div>
                       
                       </form>
                   </div>
                 </div>
               </div> 


            );


       }// fin de render


}// fin de clase Login
export default Login;