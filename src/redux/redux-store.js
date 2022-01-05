import {combineReducers, createStore} from "redux";
import productReducer from "./product-reducer";


let reducers = combineReducers({
  /*  profilePage: profileReducer,*/
    productPage: productReducer,

   /* auth: authReducer*/
});

let store = createStore(reducers);

window.store = store;


export default store;