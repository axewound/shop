import React from 'react';
import {connect} from "react-redux";
import NavBarBodyLeft from "./NavBarBodyLeft";
import {setProductExect} from "../../redux/label-reducer";
import {sliderId, } from "../../redux/product-reducer";


const mapDispatchToProps = (dispatch) => {
    return {
        setProductExectFunction: (label) => {
            dispatch(setProductExect(label));
        },
    }
}
/*let mapStateToProps = (state) => {
    return {
        products: state.productPage.products,
        product: state.productPage.product,
        isFetching: state.productPage.isFetching,
        searchString: state.productPage.searchString,
        filteredGoods: state.productPage.filteredGoods,
        label: state.labelPage
    }
}*/
const NavBarBodyLeftContainer = connect(null,mapDispatchToProps)(NavBarBodyLeft);

export default NavBarBodyLeftContainer;