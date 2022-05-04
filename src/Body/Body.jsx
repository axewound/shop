import React from 'react';
import NavBarBodyLeft from "./NavBarLeft/NavBarBodyLeft";
import BodyProductBlockContainer from "./ProductPage";
import ProductOnePagesContrtainer from "./ProductOnePageContainer";
import BodyHeaderBlockContainer from "./BodyHeaderBlockAll/BodyHeaderBlockContainer";
import {connect} from "react-redux";
import {basket, getProductThunk, ratingAC, setProduct, setProductOne, toggleIsFetching} from "../redux/product-reducer";
import Preloader from "../assets/Preloader";
import styles from './Body.module.css';
import ProductOnePages from "./ProductOnePage";
import {Route, withRouter} from "react-router-dom";
import ProductPages from "./ProductPage2";
import SearchExample from "./Serch";
import {Container} from "react-bootstrap";
import FilteredList from "./Serch";
import SearchBar from "./Serch";
import App1 from "./Serch";



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
                    }
                   {/* <Route path='/profile/:userId?'
                           render={() => <ProductOnePagesContrtainer products={this.props.products}product={this.props.product}/> }/>
                 */}   {/*<ProductOnePages/>*/}
              {/*      <ProductPages basket={this.props.basket} searchString={this.props.searchString}
                                                       products={this.props.products}/>*/}
                    <Route
                           render={() => <ProductPages basket={this.props.basket} searchString={this.props.searchString}
                                                       products={this.props.products} product={this.props.product}/>
                           }/>
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
        /*basket: state.productPage.basket*/
    }
}
let WithContainer = withRouter(Body)

export default connect(mapStateToProps, {getProductThunk,basket, valueElment: ratingAC, setProduct,setProductOne, toggleIsFetching})(WithContainer);