import React, {useState} from 'react';
import SortProduct from "./SortProduct";
import SearchProductContainer from "./SearchProductContainer";
import ProductPagesContainer from "../ProductPageContainer";
import Preloader from "../../assets/Preloader";
import NavBarBodyLeftContainer from "../NavBarLeft/NavBarBodyLeftContainer";
import NavCheckboxContainer from "../NavBarLeft/NavCheckboxContainer";
import LanguageSelected from "./Language";
import styles from "./CostTableContainer.module.css";
import PriceFilter from "./PriceFilter";




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
            <div className={styles.filters}>
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
                    {props.isFetching ? <Preloader/> : null}
                </div>

                <ProductPagesContainer basket={props.basket} isFetching={props.isFetching} products={filteredGoods}
                                       searchString={searchString}/>
            </div>
        </div>
    );
}

export default CostTable
