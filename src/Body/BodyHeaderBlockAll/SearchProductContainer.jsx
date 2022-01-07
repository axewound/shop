import React from 'react';
import SortProduct from "./SortProduct";
import SearchProduct from "./SearchProduct";
import {ratingAC, searccch, setProduct, toggleIsFetching} from "../../redux/product-reducer";
import {connect} from "react-redux";
import Simple from "../../Simple";

const SearchProductContainer = (props) => {



    return (
        <div>

            <SearchProduct searchString={props.searchString} products={props.products}/>
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
export default connect(null,mapDispatchToProps)(SearchProduct);
