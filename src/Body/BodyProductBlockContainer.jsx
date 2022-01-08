import React from 'react';
import ProductPages from "./ProductPages";
import {searccch} from "../redux/product-reducer";
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
/*console.log(state)*/
    return {
        products: state.productPage.products,
        searchString: state.productPage.searchString,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
  /*      handleChange2: (searchString) => {

            dispatch(searccch(searchString));
        },*/

    }
}




export default connect(mapStateToProps,mapDispatchToProps)(BodyProductBlockContainer);