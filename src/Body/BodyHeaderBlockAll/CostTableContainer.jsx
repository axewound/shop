import React, {useState} from 'react';
import SortProduct from "./SortProduct";
import SearchProductContainer from "./SearchProductContainer";
import Preloader from "../../assets/Preloader";
import NavBarBodyLeftContainer from "../NavBarLeft/NavBarBodyLeftContainer";
import NavCheckboxContainer from "../NavBarLeft/NavCheckboxContainer";
import LanguageSelected from "./Language";
import ProductPages from "../ProductPage";



const PriceInput = ({index, ...props}) => (

    <input className="price-input" data-index={index} {...props} />
);

const PriceFilter = ({props, value, onChange,}) => (
    <div>
        <PriceInput value={value[0]} onChange={onChange} index="0"/>
        &nbsp;-&nbsp;
        <PriceInput value={value[1]} onChange={onChange} index="1"/>
        &nbsp;usd&nbsp;
    </div>
);



const CostTable = ({products, searchString, props,handleChange}) => {
    const [price, setPrice] = React.useState(['', '']);
    let filteredGoods = products.filter(n => (
        (!price[0] || price[0] <= n.price) &&
        (!price[1] || price[1] >= n.price)
    ));

    const onPriceChange = ({target: {value, dataset: {index}}}) => {
        setPrice(price.map((n, i) => i === +index ? value : n));

    };

    return (
        <div>
            <div className="filters">
                <SortProduct
                    handleChange={handleChange}
                />
                <SearchProductContainer/>
                <PriceFilter value={price} onChange={onPriceChange}/>
                <LanguageSelected/>
            </div>
            <div style={{display: "flex"}}>
                <div>
                    <NavBarBodyLeftContainer props={props} menus={props.menus}/>
                    <NavCheckboxContainer props={props} menus={props.menus} products={filteredGoods}
                                          searchString={searchString}/>
                </div>
                {props.isFetching ? <Preloader/> : null}

                <ProductPages basket={props.basket} isFetching={props.isFetching} products={filteredGoods}
                                       searchString={searchString}/>
            </div>
        </div>
    );
}

export default CostTable
