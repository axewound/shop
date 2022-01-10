import React from 'react';
import style from './App.module.css';
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import {Route} from "react-router-dom";
import ProductOnePages from "./Body/ProductOnePage";
import Slider from "./assets/Slider";
import Home from "./Header/Home";



const App = () => {


    return (
        <div className={style.container}>
            <Header/>
            <Route path='/home'
                   render={() =>  <Home/>}/>

            <Route path='/devices'
                   render={() => <Body/>}/>

            {/*<Body/>*/}
            <Footer/>
        </div>
    )

}

export default App;
