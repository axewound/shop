import React from 'react';
import {connect} from "react-redux";
import NavBarBodyLeft from "./NavBarBodyLeft";
import {setProductExect} from "../../redux/label-reducer";


const mapDispatchToProps = (dispatch) => {
    return {
        setProductExectFunction: (label) => {
            dispatch(setProductExect(label));
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
const NavBarBodyLeftContainer = connect(mapStateToProps,mapDispatchToProps)(NavBarBodyLeft);

export default NavBarBodyLeftContainer;