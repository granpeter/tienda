import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING} from "./types";


export  const registerUser= (userData, history) =>(dispatch) =>{
    console.log ("entro a la función registerUser ");
    axios
    .post("http://localhost:5000/users/register", userData) //especificar la ruta en la api backend va atender la petición de registro
    .then((res) =>history.push("/login")) // re-direct to login on successful register
    .catch((err) =>
    dispatch({
        type:GET_ERRORS,
        payload:err.response.data,
        })
        );
};



// Login -get user token
export const loginUser= (userData) =>(dispatch) =>{
    axios
    .post("http://localhost:5000/users/login", userData) //especificar la ruta en la api backend va atender la petición
    .then((res) =>{
    // Save to localStorage
    // Set token to localStorage
    const{ token} = res.data;
    localStorage.setItem("jwtToken", token);
    //SettokentoAuthheader
    setAuthToken(token);
    //Decodetokentogetuserdata
    const decoded=jwt_decode(token);
    //Setcurrentuser
    dispatch(setCurrentUser(decoded));
   })
   .catch((err) =>
   dispatch({
        type:GET_ERRORS,
        payload:err.response.data,
    })
   );// fin de catch
};


// Set logged in user
export const setCurrentUser= (decoded) =>{
    return{
    type:SET_CURRENT_USER,
    payload:decoded,
    };
 };

 //Userloading
export const setUserLoading=()=>{
    return{
    type:USER_LOADING,
    };
};

//Loguserout
export const logoutUser=()=>(dispatch)=>{
    //Removetokenfromlocalstorage
    localStorage.removeItem("jwtToken");
    //Removeauthheaderforfuturerequests
    setAuthToken(false);
    //Setcurrentusertoemptyobject{}whichwillsetisAuthenticatedtofalse
    dispatch(setCurrentUser({}));
};


