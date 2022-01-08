import React from 'react';
import SortProduct from "./SortProduct";
import SearchProduct from "./SearchProduct";
import {ratingAC, searccch, searchMixMax, setProduct, toggleIsFetching} from "../../redux/product-reducer";
import {connect} from "react-redux";
import Simple from "../../Simple";
import SearchProductContainer from "./SearchProductContainer";
import PriceMinMax from "./PriceMinMax";


const mapDispatchToProps = (dispatch) => {
    return {

        handleChange23: (price) => {
            console.log(price)
            dispatch(searchMixMax(price));
        },

    }
}
const PriceMinMaxContainer = connect(null,mapDispatchToProps)(PriceMinMax);

export default PriceMinMaxContainer;
