import React from 'react';
import SortProduct from "./SortProduct";
import {ratingAC, searccch,  toggleIsFetching} from "../../redux/product-reducer";
import {connect} from "react-redux";
import SearchProductContainer from "./SearchProductContainer";
import CostTable from "./CostTable";
import SearchProduct from "./SearchProduct";

const BodyHeaderBlockContainer = (props) => {
    return (
        <div>
            <SortProduct
                handleChange={props.handleChange}
            />
            <SearchProductContainer/>
            <CostTable products={props.products}  searchString={props.searchString}/>
        </div>
    )
}

export default BodyHeaderBlockContainer;
