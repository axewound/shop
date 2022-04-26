import React from 'react';
import style from './App.module.css';
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import {Redirect, Route} from "react-router-dom";
import Home from "./Header/Home";
import {Container} from "react-bootstrap";



const App = () => {


    return (
        <Container>

            <Header/>
   {/*         <Route exact path="/">
                <Redirect to="/home" />
            </Route>*/}
            <Route path='/' exact
                   render={() =>  <Home/>}/>

            <Route path='/products'
                   render={() => <Body/>}/>

            {/*<Body/>*/}
            <Footer/>
        </Container>
    )

}

export default App;
