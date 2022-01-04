import React from 'react';
import style from './App.module.css';
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

const App = () => {
    return (
        <div className={style.container}>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )

}

export default App;
