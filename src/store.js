import { createStore,applyMiddleware, compose} from "redux";
import {configureStore} from '@reduxjs/toolkit'
import rootReducer  from "./reducers/index";
import {combineReducers} from "redux";
//import authReducer from "./reducers/authReducer";
//import errorReducer from "./reducers/errorReducer";

import thunk from "redux-thunk";

/*
let reducers = combineReducers({
      auth:authReducer,
      errors:errorReducer
 })
*/

const initialState= {};
const middleware= [thunk];
//const store= configureStore(
      //{reducer:reducers},
 const store= createStore( 
      rootReducer,    
      initialState,
      compose(
      applyMiddleware(...middleware)
      )
);
export default store;