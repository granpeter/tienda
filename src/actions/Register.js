import React, {Component} from "react";
import {Link} from "react-router-dom";

class Register extends Component{

    constructor(){
        super();
        this.state={
        name:"",
        email:"",
        password:"",
        password2:"",
        errors:{}

};
}
onChange=e=>{
this.setState({[e.target.id]:e.target.value});
};
onSubmit=e=>{
e.preventDefault();
const newUser={
name:this.state.name,
email:this.state.email,
password:this.state.password,
password2:this.state.password2
};
console.log(newUser);
};
render(){
const{errors}=this.state;
return(
<div className="container">
<div className="row">
<div className="cols8offset-s2">

<Link to="/"className="btn-flatwaves-effect">
<i className="material-iconsleft">keyboard_backspace</i>Backto
home
</Link>
<div className="cols12"style={{paddingLeft:"11.250px"}}>
<h4>
<b>Register</b>below
</h4>
<p className="grey-texttext-darken-1">
Alreadyhaveanaccount?<Link to="/login">Login</Link>
</p>

</div>
<form noValidateonSubmit={this.onSubmit}>
<div className="input-fieldcols12">
<input
onChange={this.onChange}
value={this.state.name}
error={errors.name}
id="name"
type="text"   

/>
<label htmlFor="name">Name</label>
</div>
<div className="input-field col s12">
<input
onChange={this.onChange}
value={this.state.email}
error={errors.email}
id="email"
type="email"
/>
<label htmlFor="email">Email</label>
</div>
<div className="input-field col s12">
<input
onChange={this.onChange}

value={this.state.password}
error={errors.password}
id="password"
type="password"
/>
<label htmlFor="password">Password</label>
</div>
<div className="input-field col s12">
<input
onChange={this.onChange}
value={this.state.password2}
error={errors.password2}
id="password2"
type="password"
/>
<label htmlFor="password2">Confirm Password</label>
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
    Registrar
    </button>
  
    </div>
    </form>
    </div>
    </div>
    </div>
    );
    }
    }

    export default Register;
