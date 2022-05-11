import React from 'react';
import {connect} from "react-redux";
import HeaderAfterTop from "./HeaderAfterTop";


const mapDispatchToProps = (dispatch) => {
    return {

    }
}

let mapStateToProps = (state) => {
    return {
        products: state.productPage.products,
        searchString: state.productPage.searchString,
        uniqueArr:state.productPage.uniqueArr
    }
}

const HeaderAfterTopContainer = connect(mapStateToProps,mapDispatchToProps)(HeaderAfterTop);

export default HeaderAfterTopContainer;