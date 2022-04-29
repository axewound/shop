import React from 'react';
import NavBarBodyLeft from "./NavBarLeft/NavBarBodyLeft";
import BodyProductBlockContainer from "./ProductPage";
import ProductOnePagesContrtainer from "./ProductOnePageContainer";
import BodyHeaderBlockContainer from "./BodyHeaderBlockAll/BodyHeaderBlockContainer";
import {connect} from "react-redux";
import {basket, getProductThunk, ratingAC, setProduct, toggleIsFetching} from "../redux/product-reducer";
import Preloader from "../assets/Preloader";
import styles from './Body.module.css';
import ProductOnePages from "./ProductOnePage";
import {Route, withRouter} from "react-router-dom";
import ProductPages from "./ProductPage";



class Body extends React.Component {

    componentDidMount() {
        this.props.getProductThunk();
    }

    handleChange = (e) => {
        let value = e.target.value
        this.props.valueElment(value)
        this.setState(this.props.products);
    };

    render() {
        return (
            <div>
                <BodyHeaderBlockContainer handleChange={this.handleChange} />
                <div className={styles.bodyContainer}>
                    <NavBarBodyLeft/>
                    {this.props.isFetching ? <Preloader/> : null}
                    <Route path='/products/:userId'
                           render={() => <ProductOnePagesContrtainer products={this.props.products}/> }/>
                    {/*<ProductOnePages/>*/}
              {/*      <ProductPages basket={this.props.basket} searchString={this.props.searchString}
                                                       products={this.props.products}/>*/}
                    <Route exact path='/products'
                           render={() => <ProductPages basket={this.props.basket} searchString={this.props.searchString}
                                                       products={this.props.products}/>
                           }/>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.productPage.products,
        isFetching: state.productPage.isFetching,
        searchString: state.productPage.searchString,
        /*basket: state.productPage.basket*/
    }
}
let WithContainer = withRouter(Body)

export default connect(mapStateToProps, {getProductThunk,basket, valueElment: ratingAC, setProduct, toggleIsFetching})(WithContainer);