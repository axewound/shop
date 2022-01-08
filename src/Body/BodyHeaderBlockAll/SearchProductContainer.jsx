import React from 'react';
import SortProduct from "./SortProduct";
import SearchProduct from "./SearchProduct";
import {ratingAC, searccch, setProduct, toggleIsFetching} from "../../redux/product-reducer";
import {connect} from "react-redux";
import Simple from "../../Simple";


const mapDispatchToProps = (dispatch) => {
    return {
        handleChange2: (searchString) => {
            dispatch(searccch(searchString));
        },

    }
}

const SearchProductContainer = connect(null,mapDispatchToProps)(SearchProduct);

export default SearchProductContainer;