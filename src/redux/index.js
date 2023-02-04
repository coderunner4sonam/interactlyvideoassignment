import {createStore} from "redux";
import actionReducer from "./actionReducer.js";

 let store=createStore(actionReducer);

export default store;

