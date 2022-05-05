import React from 'react';
import NavBarBodyLeft from "./NavBarLeft/NavBarBodyLeft";
import BodyHeaderBlockContainer from "./BodyHeaderBlockAll/BodyHeaderBlockContainer";
import {connect} from "react-redux";
import {
    basket,
    getProductThunk,
    ratingAC,
    setProduct,
    toggleIsFetching
} from "../redux/product-reducer";
import Preloader from "../assets/Preloader";
import styles from './Body.module.css';
import {Route, withRouter} from "react-router-dom";

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
                <BodyHeaderBlockContainer handleChange={this.handleChange} products={this.props.products}
                                          searchString={this.props.searchString}/>
                <div className={styles.bodyContainer}>
                    <NavBarBodyLeft/>
                    {this.props.isFetching ? <Preloader/> : null}


                    {/*  <Route
                        render={() => <ProductPages basket={this.props.basket} searchString={this.props.searchString}
                                                    products={this.props.products} product={this.props.product}/>
                        }/>*/}
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.productPage.products,
        product: state.productPage.product,
        isFetching: state.productPage.isFetching,
        searchString: state.productPage.searchString,
    }
}


let WithContainer = withRouter(Body)

export default connect(mapStateToProps, {
    getProductThunk,
    basket,
    valueElment: ratingAC,
    setProduct,
    toggleIsFetching
})(WithContainer);