import React from 'react';
import { withRouter} from "react-router-dom";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {getUserProfile} from "../redux/product-reducer";
import {compose} from "redux";

class ProductOnePages extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId);
    }
    render() {
        console.log(this.state)
        return (
            <ProfileInfo {...this.props} products={this.props.products} />
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state)

    return {
        products: state.productPage.products,
    }
}
export default  compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter
)(ProductOnePages)

