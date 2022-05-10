import React from 'react';
import BodyHeaderBlockContainer from "./BodyHeaderBlockAll/BodyHeaderBlockContainer";
import {connect} from "react-redux";
import {
    basket,
    getProductThunk,
    ratingAC,
    searccch,
    searccch23,
    setCheckFunction,
    setProduct,
    toggleIsFetching
} from "../redux/product-reducer";
import {withRouter} from "react-router-dom";
import {setProductExect} from "../redux/label-reducer";
import SortProduct from "./BodyHeaderBlockAll/SortProduct";
import LanguageSelected from "./BodyHeaderBlockAll/Language";
import SearchProductContainer from "./BodyHeaderBlockAll/SearchProductContainer";
import NavBarBodyLeftContainer from "./NavBarLeft/NavBarBodyLeftContainer";
import NavCheckboxContainer from "./NavBarLeft/NavCheckboxContainer";
import Preloader from "../assets/Preloader";
import ProductPagesContainer from "./ProductPageContainer";
import SortProductContainer from "./BodyHeaderBlockAll/SortProductContainer";

function Body(props) {
    console.log(props)
    return (
        <div>
    {/*        <BodyHeaderBlockContainer handleChange={props.handleChange}
                                      handleChange23={props.handleChange23}
                                      products={props.products}
                                      searchString={props.searchString}
                                      filteredGoods={props.filteredGoods}
                                      props={props}
                                      basket={props.basket}
                                      isFetching={props.isFetching}
                                      menus={props.label}

            />*/}

          {/*  <div>
                <div>
                    <SortProduct props={props}
                        handleChange={props.handleChange}
                    />
                    <SearchProductContainer/>
                    <LanguageSelected/>
                </div>
                <div>
                    <div>
                        <NavBarBodyLeftContainer props={props} menus={props.props.menus}/>
                        <NavCheckboxContainer props={props} menus={props.menus} products={props.props.filteredGoods}
                                              searchString={props.props.searchString}/>
                        {props.isFetching ? <Preloader/> : null}
                    </div>
                    <ProductPagesContainer basket={props.basket} isFetching={props.isFetching} products={props.props.filteredGoods}
                                           searchString={props.props.searchString}/>

                </div>
            </div>*/}
        </div>
    )
}


let WithContainer = withRouter(Body)

export default connect(null, {
    getProductThunk,
    basket,
    searccch,
    searccch23,
    valueElment: ratingAC,
    setProduct,
    toggleIsFetching,
    setProductExect,
    setCheckFunction
})(WithContainer);