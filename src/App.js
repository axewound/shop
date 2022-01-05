import React from 'react';
import style from './App.module.css';
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import {Route} from "react-router-dom";
import ProductOnePage from "./Body/ProductOnePage";
import ProductOnePages from "./Body/ProductOnePage";
import NavBarBodyLeft from "./Body/NavBarLeft/NavBarBodyLeft";

const App = () => {
    return (
        <div className={style.container}>

            <Header/>

            <div className={style.lllll}>

                <Route path='/product/:userId?'
                       render={() => <ProductOnePages/>}/>
                <Route path='/body'
                       render={() => <Body/>}/>
            </div>
            {/*<Body/>*/}
            <Footer/>
        </div>
    )

}

export default App;
