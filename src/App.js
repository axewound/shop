import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Route} from "react-router-dom";
import Home from "./Header/Home";
import {Container} from "react-bootstrap";
import ProductOnePagesContrtainer from "./Body/ProductOnePageContainer";
import BodyContainer from "./Body/BodyContainer";
import Simple from "./assets/Simple";

const App = () => {
    return (
            <Container>
                <Header/>
                <Route path='/' exact
                       render={() => <Home/>}/>
                <Route path='/product/:userId?'
                       render={() => <ProductOnePagesContrtainer/>}/>
                <Route path='/product/:label?'
                       render={() => <Simple/>}/>
                <Route path='/products'
                       render={() => <BodyContainer/>}/>
                <Footer/>
            </Container>
    )
}

export default App;
