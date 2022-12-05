import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import { withRouter} from "react-router-dom";
import { getUserProfile,} from "../redux/product-reducer";
import {compose} from "redux";


class ProductOnePagesContrtainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        console.log(this.props)
        this.props.getUserProfile(userId);

    }
    render() {
        return (
            <ProfileInfo  {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    products: state.productPage.products,
    profile: state.productPage.profile,
});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter
)(ProductOnePagesContrtainer);

