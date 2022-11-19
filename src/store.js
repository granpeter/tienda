import { createStore, applyMiddleware, compose} from "redux";
import {configureStore} from '@reduxjs/toolkit'

import {combineReducers} from "redux";
import authReducer from "./reducers/authReducer";
import errorReducer from "./reducers/errorReducer";

import thunk from "redux-thunk";


let reducers = combineReducers({
      auth:authReducer,
      errors:errorReducer
 })


const initialState= {};
const middleware= [thunk];
const store= configureStore(
      {reducer:reducers},
      initialState,
      compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
     )
);
export default store;