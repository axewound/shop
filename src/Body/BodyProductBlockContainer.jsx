import React from 'react';
import ProductPages from "./ProductPages";
import {connect} from "react-redux";

class BodyProductBlockContainer extends React.Component {
    render() {
        return (
            <div>
                <ProductPages searchString={this.props.searchString} products={this.props.products}
                />
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        products: state.productPage.products,
        searchString: state.productPage.searchString,
    }
}

export default connect(mapStateToProps,[])(BodyProductBlockContainer);