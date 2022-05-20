import React from 'react';
import {connect} from "react-redux";
import {
    basket,
    ratingAC,
} from "../redux/product-reducer";
import { withRouter} from "react-router-dom";
import Body from "./Body";

class BodyContainer extends React.Component {

    handleChange = (e) => {
        let value = e.target.value
        this.props.valueElment(value)
        this.setState(this.props.products);
    };

    render() {
        return (
            <div>
                {console.log(this.props)}

                <Body products={this.props.products}
                      props={this.props}
                      handleChange={this.handleChange}
                      searchString={this.props.searchString}
                      currentPage={this.props.currentPage}
                      todosPerPage={this.props.todosPerPage}
                />

            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.productPage.products,
        isFetching: state.productPage.isFetching,
        searchString: state.productPage.searchString,
        label: state.labelPage,
        currentPage:state.productPage.currentPage,
        todosPerPage:state.productPage.todosPerPage
    }
}

let WithContainer = withRouter(BodyContainer)

export default connect(mapStateToProps, {
    basket,
    valueElment: ratingAC,
})(WithContainer);