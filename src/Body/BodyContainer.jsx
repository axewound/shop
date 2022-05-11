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
    /*searccch23, */
    setCheckFunction
} from "../redux/product-reducer";
import Preloader from "../assets/Preloader";
import styles from './Body.module.css';
import {Route, withRouter} from "react-router-dom";
import ProductPages from "./ProductPage";
import CostTableContainer from "./BodyHeaderBlockAll/Body";
import ProductPagesContainer from "./ProductPageContainer";
import {setProductExect} from "../redux/label-reducer";
import CostTable from "./BodyHeaderBlockAll/Body";
import Body from "./BodyHeaderBlockAll/Body";

class BodyContainer extends React.Component {

    handleChange = (e) => {
        let value = e.target.value
        this.props.valueElment(value)
        this.setState(this.props.products);
    };

    render() {

        return (
            <div>
                <Body products={this.props.products}
                      isFetching={this.props.isFetching}
                      props={this.props}
                      handleChange={this.handleChange}
                      searchString={this.props.searchString}

                    /*basket={this.props.basket} */
                    /*    menus={this.props.label}*/

                />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state)
    return {
        products: state.productPage.products,
        isFetching: state.productPage.isFetching,
        searchString: state.productPage.searchString,
        /*   filteredGoods: state.productPage.filteredGoods,*/
        label: state.labelPage
    }
}


let WithContainer = withRouter(BodyContainer)

export default connect(mapStateToProps, {
    /* getProductThunk,*/
    basket,
    searccch,
    /* searccch23,*/

    valueElment: ratingAC,
    setProduct,
    toggleIsFetching,
    setProductExect,
    setCheckFunction
})(WithContainer);