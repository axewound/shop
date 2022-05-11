import React from 'react';
import styles from './ProductPages.module.css';
import ProductPages from "./ProductPage";

class ProductPagesContainer extends React.Component {

    render() {
        return (
            <div className={styles.blockProducts}>
               <ProductPages basket={this.props.basket}  products={this.props.products}
                             currentPage={this.props.currentPage}
                             todosPerPage={this.props.todosPerPage}
                             searchString={this.props.searchString}/>
            </div>
        );
    }
}

export default ProductPagesContainer

