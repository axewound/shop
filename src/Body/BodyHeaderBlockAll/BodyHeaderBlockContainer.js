import React from 'react';
import SortProduct from "./SortProduct";
import {connect} from "react-redux";
import SearchProductContainer from "./SearchProductContainer";
import SearchProduct from "./SearchProduct";
import CostTableContainer from "./CostTableContainer";
import NavBarBodyLeft from "../NavBarLeft/NavBarBodyLeft";

const BodyHeaderBlockContainer = (props) => {
    console.log(props)

    return (
        <div>

            <CostTableContainer products={props.products} isFetching={props.isFetching} props={props}
                                searchString={props.searchString} basket={props.basket} menus={props.menus}/>
        </div>
    )
}

export default BodyHeaderBlockContainer;
