import React from 'react';
import styles from "./SearchProduct.module.css"


class SearchProduct extends React.Component {

    searchStringFunc = (e) => {
        const searchString = e.target.value
        this.props.serchStringReducer(searchString);
    }

    render() {
        return (
            <div className={styles.search_container}>
                <span>Keywords</span>
                <div>
                    <input
                        type="text"
                        value={this.props.searchString}
                        ref="search"
                        onChange={this.searchStringFunc}
                        placeholder="Table"
                    />
                </div>
            </div>
        );
    }
}


export default SearchProduct;