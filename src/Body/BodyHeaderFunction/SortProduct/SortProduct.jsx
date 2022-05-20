import React from 'react';
import styles from './SortProduct.module.css';


const SortProduct = (props) => {
    return (
        <div className={styles.container_sort}>
            <div className={styles.span_sort}>
                <span>Sort by:</span>
            </div>
            <div className={styles.container_sort_selected}>
                <select id="rating-filter" value={props.value} onChange={props.handleChange}>
                    <option value="Sort">Sort</option>
                    <option value="Low_rating">Low rating</option>
                    <option value="High_rating">High rating</option>
                    <option value="A_Z">A-Z</option>
                    <option value="Z_A">Z-A</option>
                </select>
            </div>
        </div>
    )
}


export default SortProduct;

