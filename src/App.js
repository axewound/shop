import React from 'react';
import style from './App.module.css';
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import {Redirect, Route} from "react-router-dom";
import Home from "./Header/Home";
import {Container} from "react-bootstrap";
import SearchExample from "./Body/Serch";
import ProductOnePagesContrtainer from "./Body/ProductOnePageContainer";



const App = () => {


    return (
        <Container>
            <Header/>
            <Route path='/' exact
                   render={() =>  <Home/>}/>
            <Route path='/product/:userId?'
                   render={() => <ProductOnePagesContrtainer /> }/>

            <Route path='/products'
                   render={() => <Body/>}/>

            <Footer/>
        </Container>
    )

/*    return (
        <Container>
            <Header/>
            <Route path='/' exact
                   render={() =>  <Home/>}/>
      {/!*      <Route path='/products/:userId'
                   render={() => <ProductOnePagesContrtainer products={this.props.products}/> }/>*!/}

            <Route path='/profile'
                   render={() => <Body/>}/>

            <Footer/>
        </Container>
    )*/
}

export default App;
