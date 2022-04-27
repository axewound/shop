import React from 'react';
import HeaderTop from "./HeaderTop";
import HeaderAfterTop from "./HeaderAfterTop";
import HeaderSlider from "./HeaderSlider";
import style from "./Header.module.css"
import {connect} from "react-redux";
import Basket from "./Basket";
import {basketDelete,increaseQuantity,decreaseQuantity} from "../redux/product-reducer";
import Slider from "../assets/Slider";

class Header extends React.Component {
    render() {
          console.log(this.props)

            return (
            <div>

                <HeaderTop basketProduct={this.props.basketProduct}/>
                <Basket basketProduct={this.props.basketProduct} basketDelete={this.props.basketDelete}
                        increaseQuantity={this.props.increaseQuantity}
                        decreaseQuantity={this.props.decreaseQuantity}/>
                <HeaderAfterTop/>
            </div>
        )
    }
}
let mapStateToProps = (state) => {

    return {

        basketProduct: state.productPage.basketProduct,
    }
}
export default connect(mapStateToProps, {basketDelete,increaseQuantity,decreaseQuantity})(Header);

/*
export default Header*/
