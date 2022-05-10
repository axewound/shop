import React from 'react';
import style from './App.module.css';
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import {Redirect, Route} from "react-router-dom";
import Home from "./Header/Home";
import {Container} from "react-bootstrap";
import ProductOnePagesContrtainer from "./Body/ProductOnePageContainer";
import {FormattedMessage, IntlProvider} from "react-intl";
import BodyContainer from "./Body/BodyContainer";

const App = () => {

    return (

            <Container>

                <Header/>

                <Route path='/portland' exact
                       render={() => <Home/>}/>

                <Route path='/product/:userId?'
                       render={() => <ProductOnePagesContrtainer/>}/>
                <Route path='/products'
                       render={() => <BodyContainer/>}/>
                <Footer/>
            </Container>
    )
}

export default App;
