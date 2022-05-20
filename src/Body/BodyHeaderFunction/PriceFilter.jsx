import React from "react";

const PriceInput = ({index, ...props}) => (

    <input className="price-input" data-index={index} {...props} />
);

const PriceFilter = ({ value, onChange,}) => (
    <div>
        <span>Price</span>
        <PriceInput value={value[0]} onChange={onChange} index="0"/>
        &nbsp;-&nbsp;
        <PriceInput value={value[1]} onChange={onChange} index="1"/>
        &nbsp;usd&nbsp;
    </div>
);



export default PriceFilter
