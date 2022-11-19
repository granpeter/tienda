import axios from "axios";
const setAuthToken = token => {
    if(token){
      //Applyauthorizationtokentoeveryrequestifloggedin
       axios.defaults.headers.common["Authorization"]=token;
    }else{
      //Deleteauthheader
      delete axios.defaults.headers.common["Authorization"];
    }
};
export default setAuthToken;