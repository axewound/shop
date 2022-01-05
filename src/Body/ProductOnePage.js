import React from 'react';
import styles from './ProductPages.module.css';
import userPhoto from '../assets/image/user.png';
import {NavLink, withRouter} from "react-router-dom";
import axios from "axios";
import ProductOnePage from "./ProductOnePage";
import ProfileInfo from "./ProductPages1";
import {connect} from "react-redux";
import productReducer, {setProduct} from "../redux/product-reducer";

class ProductOnePages extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://fakestoreapi.com/products/` + userId)
            .then(response => {
                this.props.setProduct(response.data);
            });
    }
    render() {
        return (
            <ProfileInfo {...this.props} products={this.props.products}  />
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state.productPage.profile)
    return {
        products: state.productPage.products,

    }
}

let WithUrlDataContainerComponent = withRouter(ProductOnePages);
export default connect(mapStateToProps, {setProduct})(WithUrlDataContainerComponent);