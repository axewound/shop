import React from 'react';
import SortProduct from "./SortProduct";
import SearchProduct from "./SearchProduct";
import {ratingAC, searccch, searchMixMax, setProduct, toggleIsFetching} from "../../redux/product-reducer";
import {connect} from "react-redux";
import Simple from "../../assets/Slider";
import SearchProductContainer from "./SearchProductContainer";
import PriceMinMax from "./PriceMinMax";

let mapStateToProps = (state) => ({
    products: state.productPage.products,
});

const mapDispatchToProps = (dispatch) => {

    return {

        handleChange23: (name) => {
            dispatch(searchMixMax(name));
        },

    }
}
const PriceMinMaxContainer = connect(mapStateToProps,mapDispatchToProps)(PriceMinMax);

export default PriceMinMaxContainer;

