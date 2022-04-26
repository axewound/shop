import React from 'react';
import ProfileInfo from "./ProfileInfo";
/*import Profile from "./Profile";*/
import * as axios from "axios";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfile} from "../redux/product-reducer";


class ProductOnePagesContrtainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }


    render() {
        {console.log(this)}


        return (
            <ProfileInfo  {...this.props} products={this.props.products}/>
        )
    }
}

let mapStateToProps = (state) => ({
    products: state.productPage.products,
});

let WithUrlDataContainerComponent = withRouter(ProductOnePagesContrtainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);







/*
let mapStateToProps = (state) => {

    return {
        products: state.productPage.products,
    }
}
export default  compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter
)(ProductOnePages)*/

