import React, {useState} from 'react';
import styles from './ProductPages.module.css';
import userPhoto from '../assets/image/user.png';
import {Link, NavLink, Route} from "react-router-dom";
import ProductPages from "./ProductPage";

class ProductPagesContainer extends React.Component {



    render() {


        return (

            <div className={styles.blockProducts}>

               <ProductPages basket={this.props.basket}  products={this.props.products} searchString={this.props.searchString}/>
            </div>
        );
    }
}

export default ProductPagesContainer


/*


Мейби норм тема, хз, не удалять, проверить зачем нужно была обгортка

import ProductPages from "./ProductPages";
import {connect} from "react-redux";
import PriceMinMax from "./BodyHeaderBlockAll/PriceMinMax";
import PriceMinMaxContainer from "./BodyHeaderBlockAll/PriceMinMaxContainer";

/!*class BodyProductBlockContainer extends React.Component {
    render() {

        return (
            <div>
                <ProductPages searchString={this.props.searchString} products={this.props.products}
                />
            </div>
        )
    }
}*!/
let mapStateToProps = (state) => {
/!*console.log(state)*!/
    return {
       /!* products: state.productPage.products,*!/
        searchString: state.productPage.searchString,
    }
}

  const BodyProductBlockContainer = connect(mapStateToProps,null)(ProductPages);
  export default BodyProductBlockContainer;

/!*export default connect(mapStateToProps,[])(BodyProductBlockContainer);*!/
*/
