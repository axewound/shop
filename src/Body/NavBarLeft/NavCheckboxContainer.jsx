import React from 'react';
import {connect} from "react-redux";
import NavCheckbox from "./NavCheckbox";
import {setCheckFunction} from "../../redux/product-reducer";


const mapDispatchToProps = (dispatch) => {
    return {
        setCheck: (che) => {
            dispatch(setCheckFunction(che));
        },
    }
}
let mapStateToProps = (state) => {
    return {
        products: state.productPage.products,
        product: state.productPage.product,
        isFetching: state.productPage.isFetching,
        searchString: state.productPage.searchString,
        filteredGoods: state.productPage.filteredGoods,
        label: state.labelPage
    }
}
const NavCheckboxContainer = connect(mapStateToProps,mapDispatchToProps)(NavCheckbox);

export default NavCheckboxContainer;