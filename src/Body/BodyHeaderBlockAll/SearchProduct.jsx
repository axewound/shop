import React from 'react';
import styles from "../ProductPages.module.css";


class SearchProduct extends React.Component {
    state = {
        products:this.props.products
    };

    handleChange1 = (e) => {
        const searchString = e.target.value
        this.props.handleChange2(searchString);
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
                            onChange={this.handleChange1}
                            placeholder="type name heres"
                        />
                    </div>
                </div>
        );
    }
}


export default SearchProduct;