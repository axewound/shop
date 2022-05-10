import React from 'react';
import NavBarBodyLeft from "./NavBarLeft/NavBarBodyLeft";
import BodyHeaderBlockContainer from "./BodyHeaderBlockAll/BodyHeaderBlockContainer";
import {connect} from "react-redux";
import {
    basket,
    getProductThunk,
    ratingAC,
    setProduct,
    toggleIsFetching,
    searccch,
    searccch23, setCheckFunction
} from "../redux/product-reducer";
import Preloader from "../assets/Preloader";
import styles from './Body.module.css';
import {Route, withRouter} from "react-router-dom";
import ProductPages from "./ProductPage";
import CostTableContainer from "./BodyHeaderBlockAll/CostTableContainer";
import ProductPagesContainer from "./ProductPageContainer";
import {setProductExect} from "../redux/label-reducer";

class Body extends React.Component {
    componentDidMount() {
        this.props.getProductThunk();
    }

    handleChange = (e) => {
        let value = e.target.value
        this.props.valueElment(value)
        this.setState(this.props.products);
    };
    handleChange23 = (filteredGoods) => {
        this.props.searccch23(filteredGoods)

    };

    render() {

        return (
            <div>
               {/* <BodyHeaderBlockContainer handleChange={this.handleChange}
                                          handleChange23={this.handleChange23}
                                          products={this.props.products}
                                          searchString={this.props.searchString}
                                          filteredGoods={this.props.filteredGoods}
                                           props={this.props}
                                          basket={this.props.basket}
                                          isFetching={this.props.isFetching}
                                          menus={this.props.label}

                />*/}
                <CostTableContainer products={this.props.products} isFetching={this.props.isFetching} props={this.props} handleChange={this.handleChange}
                                    searchString={this.props.searchString} basket={this.props.basket} menus={this.props.label}/>
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
        filteredGoods: state.productPage.filteredGoods,
        label:state.labelPage
    }
}


let WithContainer = withRouter(Body)

export default connect(mapStateToProps, {
    getProductThunk,
    basket,
    searccch,
    searccch23,

    valueElment: ratingAC,
    setProduct,
    toggleIsFetching,
    setProductExect,
    setCheckFunction
})(WithContainer);