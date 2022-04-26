import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import history from "./api/history";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Header/Home";
import {Container} from "react-bootstrap";

ReactDOM.render(
    <BrowserRouter  history={history}>
        <Provider store={store}>
            <App/>

        </Provider>
    </BrowserRouter>, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
