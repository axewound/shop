import React from 'react';
import {connect} from "react-redux";
import FilterSearch from "./FilterSearch";
import {setFindSectionTop} from "../redux/product-reducer";


const mapDispatchToProps = (dispatch) => {
    return {
        searchTopSection: (title) => {
        dispatch(setFindSectionTop(title));
},

    }
}
let mapStateToProps = (state) => {
    return {
        products: state.productPage.products,
        isFetching: state.productPage.isFetching,
        searchString: state.productPage.searchString,
       /* filteredGoods: state.productPage.filteredGoods,*/
        label: state.labelPage
    }
}
const FilterSearchContainerTop = connect(mapStateToProps,mapDispatchToProps)(FilterSearch);

export default FilterSearchContainerTop;