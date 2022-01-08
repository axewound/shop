import React from 'react';
import HeaderTop from "./HeaderTop";
import HeaderAfterTop from "./HeaderAfterTop";
import HeaderSlider from "./HeaderSlider";
import style from "./Header.module.css"
import {connect} from "react-redux";
import {basket, getProductThunk, ratingAC, setProduct, toggleIsFetching} from "../redux/product-reducer";
class Header extends React.Component {
    render() {
        return (
            <div>
                <HeaderTop basket={this.props.basket}/>
                <HeaderAfterTop/>
                <HeaderSlider/>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        basket: state.productPage.basket
    }
}
export default connect(mapStateToProps, {})(Header);

/*
export default Header*/
