/* eslint-disable no-undef */
import React,{Component} from "react";
import {Link , withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import { connect}  from "react-redux";
import  {registerUser} from "../actions/authActions";
import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING} from "../actions/types";

class Register extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            password:"",
            password2:"",
            errors:{}

        };

    }// fin de constructor

    onChange=e=>{
        this.setState({[e.target.id]:e.target.value});
        };
    
        onSubmit=e=>{ // actualizar estado del usuario
            e.preventDefault();
            const newUser={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password2:this.state.password2
            };
            
            console.log(newUser);
            this.props.registerUser(newUser, this.props.history);
          
        };
    

     render(){
        const {errors}=this.state;
        return (
            <div className="container">
              
             <div className="row">
                
                <div className="cols8offset-s2">
                  
                   <Link  to="/"className="btn-flatwaves-effect">
                   < i className="material-iconsleft">keyboard_backspace</i>Regreso a Principal
                   </Link>

                   <div className="cols12"style={{paddingLeft:"11.250px"}}>
                       <h4>
                          <b>Registrese</b>  Adelante
                        </h4>
                      <p className="grey-texttext-darken-1">
                         ya tiene una cuenta?<Link to="/login">Login</Link>
                      </p>

                    </div>

                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="input-fieldcols12">
                          <input
                           onChange={this.onChange}
                            value={this.state.name}
                            error={errors.name}
                            id="name"
                            type="text"
                           />
                           <label htmlFor="name">Nombre</label>
                        </div>

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

                         <div className="input-field col s12">
                          <input
                             onChange={this.onChange}
                             value={this.state.password2}
                             error={errors.password2}
                            id="password2"
                            type="password"
                           /> 
                           <label htmlFor="password2">Confirmar Contraseña</label>
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
                             >Registrese</button>
                         </div>
                    
                    </form>
                </div>
              </div>
            </div>    

        );
     
    
    }// fin de render

}// fin de clase Register


Register.propTypes = {
    registerUser:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
};

const mapStateToProps=( state )=>({
    auth:state.auth,
    errors:state.errors
  });

 export default connect( mapStateToProps,{ registerUser }) (withRouter (Register) );




