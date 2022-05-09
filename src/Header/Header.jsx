import React from 'react';
import HeaderTop from "./HeaderTop";
import HeaderAfterTop from "./HeaderAfterTop";
import HeaderSlider from "./HeaderSlider";
import style from "./Header.module.css"
import {connect} from "react-redux";
import Basket from "./Basket";
import {basketDelete, increaseQuantity, decreaseQuantity, getProductThunk,} from "../redux/product-reducer";
import Slider from "../assets/Slider";
import {withRouter} from "react-router-dom";
import HeaderAfterTopContainer from "./HeaderAfterTopContainer";

class Header extends React.Component {
    componentDidMount() {
        this.props.getProductThunk();
    }
    render() {

        return (
            <div>
                <HeaderTop basketProduct={this.props.basketProduct}
                           totalPrice={this.props.totalPrice}
                           basketDelete={this.props.basketDelete}
                           increaseQuantity={this.props.increaseQuantity}
                           decreaseQuantity={this.props.decreaseQuantity}

            />

                <HeaderAfterTopContainer
                    textnav={this.props.textnav}
                    products={this.props.products}
                    searchString={this.props.searchString}
                    product={this.props.product}
                    filteredGoods={this.props.filteredGoods}
                    uniqueArr={this.props.uniqueArr}

                />
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        textnav: state.productPage.textnav,
        textId: state.productPage.textId,
        basketProduct: state.productPage.basketProduct,
        totalPrice: state.productPage.totalPrice,
        products: state.productPage.products,
        product: state.productPage.product,
        filteredGoods: state.productPage.filteredGoods,
        searchString: state.productPage.searchString,
        uniqueArr: state.productPage.uniqueArr,

    }
}


let WithContainer = withRouter(Header)
export default connect(mapStateToProps, {basketDelete,increaseQuantity,decreaseQuantity,getProductThunk})(WithContainer);
