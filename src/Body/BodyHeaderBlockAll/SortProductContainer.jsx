import React from 'react';
import SearchProduct from "./SearchProduct";
import {ratingAC, searccch} from "../../redux/product-reducer";
import {connect} from "react-redux";
import SortProduct from "./SortProduct";





const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (value) => {
            dispatch(ratingAC(value));
        },
    }
}

const SortProductContainer = connect(null,mapDispatchToProps)(SortProduct);

export default SortProductContainer;