import React from 'react';
import style from './App.module.css';
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import {Route} from "react-router-dom";
import Home from "./Header/Home";
import {Container} from "react-bootstrap";



const App = () => {


    return (
        <Container>

            <Header/>
            <Route path='/home'
                   render={() =>  <Home/>}/>

            <Route path='/products'
                   render={() => <Body/>}/>

            {/*<Body/>*/}
            <Footer/>
        </Container>
    )

}

export default App;
