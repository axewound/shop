import React from 'react';
import styles from "../ProductPages.module.css";


class SearchProduct extends React.Component {

    searchStringFunc = (e) => {
        const searchString = e.target.value
        this.props.serchStringReducer(searchString);
    }

    render() {
        return (
            <div className={styles.blockProducts}>
                <span>Keywords</span>
                <div>
                    <input
                        type="text"
                        value={this.props.searchString}
                        ref="search"
                        onChange={this.searchStringFunc}
                        placeholder="type name heres"
                    />
                </div>
            </div>
        );
    }
}


export default SearchProduct;