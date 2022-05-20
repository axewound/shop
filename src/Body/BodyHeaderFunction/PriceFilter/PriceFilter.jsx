import React from "react";
import styles from "./PriceFilter.module.css";

const PriceInput = ({index, ...props}) => (

    <input className={styles.price_input} data-index={index} {...props} />
);

const PriceFilter = ({ value, onChange,}) => (
    <div className={styles.filter_price_container}>
        <span>Price</span>
        <PriceInput value={value[0]} onChange={onChange} index="0"/>
        &nbsp;-&nbsp;
        <PriceInput value={value[1]} onChange={onChange} index="1"/>
    </div>
);



export default PriceFilter
