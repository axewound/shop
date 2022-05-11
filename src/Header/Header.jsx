import React from 'react';
import HeaderTop from "./HeaderTop";
import {connect} from "react-redux";
import {basketDelete, increaseQuantity, decreaseQuantity, getProductThunk,} from "../redux/product-reducer";
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
                    uniqueArr={this.props.uniqueArr}
                    textId={this.props.textId}
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
        searchString: state.productPage.searchString,
        uniqueArr: state.productPage.uniqueArr,

    }
}


let WithContainer = withRouter(Header)
export default connect(mapStateToProps, {basketDelete,increaseQuantity,decreaseQuantity,getProductThunk})(WithContainer);
