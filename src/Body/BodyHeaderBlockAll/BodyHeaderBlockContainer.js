import React from 'react';
import SortProduct from "./SortProduct";
import {connect} from "react-redux";
import SearchProductContainer from "./SearchProductContainer";
import SearchProduct from "./SearchProduct";
import CostTableContainer from "./CostTableContainer";
import NavBarBodyLeft from "../NavBarLeft/NavBarBodyLeft";
import Header from "../../Header/Header";

const BodyHeaderBlockContainer = (props) => {

    return (
        <div>
            <CostTableContainer products={props.products} isFetching={props.isFetching} props={props}
                                searchString={props.searchString} basket={props.basket} menus={props.menus} currentLocale={props.currentLocale} handleChange={props.handleChange} />
        </div>
    )
}

export default BodyHeaderBlockContainer;
