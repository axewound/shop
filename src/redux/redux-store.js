import {applyMiddleware, combineReducers, createStore} from "redux";
import productReducer from "./product-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  /*  profilePage: profileReducer,*/
    productPage: productReducer,

   /* auth: authReducer*/
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;


export default store;