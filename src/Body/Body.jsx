import React from 'react';
import NavBarBodyLeft from "./NavBarLeft/NavBarBodyLeft";
import BodyProductBlockContainer from "./BodyProductBlockContainer";
import BodyHeaderBlockContainer from "./BodyHeaderBlockAll/BodyHeaderBlockContainer";
import {connect} from "react-redux";
import {getProductThunk, ratingAC, setProduct, toggleIsFetching} from "../redux/product-reducer";
import Preloader from "../assets/Preloader";
import styles from './Body.module.css';
import ProductOnePages from "./ProductOnePage";
import {Route} from "react-router-dom";


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
                <BodyHeaderBlockContainer  handleChange={this.handleChange}  onKeyUp={this.onKeyUp} products={this.props.products} />
                <div className={styles.bodyContainer}>
                    <NavBarBodyLeft/>
                    {this.props.isFetching ? <Preloader/> : null}
                    <Route path='/product/:userId?/'
                           render={ () => <ProductOnePages /> }/>
                    <Route path='/products'
                           render={ () => <BodyProductBlockContainer products={this.props.products}/> }/>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.productPage.products,
        isFetching: state.productPage.isFetching,
        searchString: state.productPage.searchString
    }
}


export default connect(mapStateToProps, {getProductThunk,valueElment: ratingAC, setProduct, toggleIsFetching})(Body);