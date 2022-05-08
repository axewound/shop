import React, {useState} from 'react';
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

    const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

    const handleChange = (e) => {
        setCurrentLocale(e.target.value);
        // storing locale in the localstorage
        localStorage.setItem("locale", e.target.value);
    };

    //localstorage
    function getInitialLocal() {
        // getting stored items
        const savedLocale = localStorage.getItem("locale");
        return savedLocale || LOCALES.ENGLISH;
    }

    return (
        <IntlProvider
            messages={messages[currentLocale]}
            locale={currentLocale}
            defaultLocale={LOCALES.ENGLISH}
        >
            <Container>
                <Header />

                <Route path='/' exact
                       render={() => <Home/>}/>
                <Route path='/product/:userId?'
                       render={() => <ProductOnePagesContrtainer/>}/>
                <Route path='/products'
                       render={() => <Body currentLocale={currentLocale} handleChange={handleChange} />}/>
                <Footer/>
            </Container>
        </IntlProvider>
    )
}

export default App;
