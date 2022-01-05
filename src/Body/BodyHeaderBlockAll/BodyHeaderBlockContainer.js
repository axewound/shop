import React from 'react';
import SortProduct from "./SortProduct";
import SearchProduct from "./SearchProduct";

const BodyHeaderBlockContainer  =(props) => {
        console.log(props)
        return (
            <div>
                <SortProduct
                    handleChange={props.handleChange}
                />
                <SearchProduct onKeyUp={props.onKeyUp} products={props.products}/>
            </div>
        )
}


export default BodyHeaderBlockContainer
