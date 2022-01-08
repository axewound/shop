import React from 'react';
import styles from './ProductPages.module.css';
import userPhoto from '../assets/image/user.png';
import {NavLink, withRouter} from "react-router-dom";
import axios from "axios";
import ProductOnePage from "./ProductOnePage";
import ProfileInfo from "./ProductPages1";
import {connect} from "react-redux";
import productReducer, {getUserProfile, setProduct} from "../redux/product-reducer";
import {compose} from "redux";

class ProductOnePages extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId);
    }
    render() {
        return (
            <ProfileInfo {...this.props}  />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.productPage.products,
    }
}
export default  compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter
)(ProductOnePages)

