import React from 'react';
import SearchProduct from "./SearchProduct";
import { searccch } from "../../redux/product-reducer";
import {connect} from "react-redux";


const mapDispatchToProps = (dispatch) => {
    return {
        handleChange2: (searchString) => {
            dispatch(searccch(searchString));
        },
    }
}

const SearchProductContainer = connect(null,mapDispatchToProps)(SearchProduct);

export default SearchProductContainer;