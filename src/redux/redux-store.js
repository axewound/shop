import {applyMiddleware, combineReducers, createStore} from "redux";
import productReducer from "./product-reducer";
import thunkMiddleware from "redux-thunk";
import labelReducer from "./label-reducer";
import sliderReducer from "./slider-reducer";

let reducers = combineReducers({
    productPage: productReducer,
    labelPage: labelReducer,
    sliderPage: sliderReducer

});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;


export default store;