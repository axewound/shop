import React from 'react';
import style from './App.module.css';
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import {Route} from "react-router-dom";
import ProductOnePages from "./Body/ProductOnePage";

const App = () => {


    return (
        <div className={style.container}>
            <Header/>
            <Route path='/product/:userId?'
                   render={() => <ProductOnePages/>}/>
            <Route path='/body'
                   render={() => <Body/>}/>
            <Footer/>
        </div>
    )

}

export default App;
