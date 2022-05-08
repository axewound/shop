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
import {messages} from "./assets/i18n/messages";
import {LOCALES} from "./assets/i18n/locales";

const App = () => {

    return (

            <Container>
                <Header/>
                <FormattedMessage id='learn_to' />

                <Route path='/' exact
                       render={() => <Home/>}/>
                <Route path='/product/:userId?'
                       render={() => <ProductOnePagesContrtainer/>}/>
                <Route path='/products'
                       render={() => <Body/>}/>
                <Footer/>
            </Container>
    )
}

export default App;
