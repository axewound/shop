import React from 'react';
import SortProduct from "./SortProduct";
import SearchProduct from "./SearchProduct";
import {ratingAC, searccch, setProduct, toggleIsFetching} from "../../redux/product-reducer";
import {connect} from "react-redux";
import Simple from "../../assets/Slider";
import SearchProductContainer from "./SearchProductContainer";
import SearchMinMaxContainer from "./PriceMinMaxContainer";

const BodyHeaderBlockContainer = (props) => {

    return (
        <div>

            <SortProduct
                handleChange={props.handleChange}
            />
            <SearchProductContainer/>
            <SearchMinMaxContainer />
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleChange2: (searchString) => {
            dispatch(searccch(searchString));
        },

    }
}
export default connect(null,mapDispatchToProps)(BodyHeaderBlockContainer);
