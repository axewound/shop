import React from 'react';
import SortProduct from "./SortProduct/SortProduct";
import {connect} from "react-redux";
import SearchProductContainer from "./SearchProduct/SearchProductContainer";
import SearchProduct from "./SearchProduct/SearchProduct";
import BodyContainer from "../Body";
import NavBarBodyLeft from "../NavBarLeft/NavBarBodyLeft";
import Body from "../Body";

const BodyHeaderBlockContainer = (props) => {
    console.log(props)

    return (
        <div>

            <Body products={props.products} isFetching={props.isFetching} props={props}
                                searchString={props.searchString} basket={props.basket} menus={props.menus}/>
        </div>
    )
}

export default BodyHeaderBlockContainer;
