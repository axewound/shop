import React from 'react';
import ProfileInfo from "./ProfileInfo";
/*import Profile from "./Profile";*/
import * as axios from "axios";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import { getUserProfile,} from "../redux/product-reducer";
import {compose} from "redux";


class ProductOnePagesContrtainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
  /*      if (!userId) {
            userId = 0;
        }*/
       /* this.props.getUserProfile(userId);*/

       /* this.props.getProductOne(userId);*/
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

/*
let WithUrlDataContainerComponent = withRouter(ProductOnePagesContrtainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);

*/


export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter
)(ProductOnePagesContrtainer);



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

