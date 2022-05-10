import React from 'react';
import {connect} from "react-redux";
import {
    basket,
    getProductThunk,
    ratingAC,
    setProduct,
    toggleIsFetching,
    searccch,
    searccch23, setCheckFunction
} from "../redux/product-reducer";
import {Route, withRouter} from "react-router-dom";
import CostTableContainer from "./BodyHeaderBlockAll/CostTableContainer";
import {setProductExect} from "../redux/label-reducer";

class BodyContainer extends React.Component {
    componentDidMount() {
        this.props.getProductThunk();
    }

    handleChange = (e) => {
        let value = e.target.value
        this.props.valueElment(value)
        this.setState(this.props.products);
    };
  /*  handleChange23 = (filteredGoods) => {
        this.props.searccch23(filteredGoods)

    };*/

    render() {

        return (
            <div>
                <CostTableContainer products={this.props.products}
                                    isFetching={this.props.isFetching}
                                    props={this.props}
                                    handleChange={this.handleChange}
                                    searchString={this.props.searchString}
                                    basket={this.props.basket} menus={this.props.label}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.productPage.products,
        product: state.productPage.product,
        isFetching: state.productPage.isFetching,
        searchString: state.productPage.searchString,
        filteredGoods: state.productPage.filteredGoods,
        label:state.labelPage
    }
}


let WithContainer = withRouter(BodyContainer)

export default connect(mapStateToProps, {
    getProductThunk,
    basket,
    searccch,
    searccch23,

    valueElment: ratingAC,
    setProduct,
    toggleIsFetching,
    setProductExect,
    setCheckFunction
})(WithContainer);