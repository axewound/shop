import React, {useState} from 'react';
import SortProduct from "./BodyHeaderFunction/SortProduct/SortProduct";
import SearchProductContainer from "./BodyHeaderFunction/SearchProduct/SearchProductContainer";
import ProductPagesContainer from "./ProductPageContainer";
import Preloader from "../assets/Preloader";
import NavBarBodyLeftContainer from "./NavBarLeft/NavBarBodyLeftContainer";
import NavCheckboxContainer from "./NavBarLeft/NavCheckboxContainer";
import LanguageSelected from "./BodyHeaderFunction/Language/Language";
import styles from "./BodyContainer.module.css";
import PriceFilter from "./BodyHeaderFunction/PriceFilter/PriceFilter";

const Body = ({products, searchString, props,handleChange}) => {

    const [price, setPrice] = useState(['', '']);
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

            <div className={styles.navbarLeft}>
                <div>
                    <NavBarBodyLeftContainer props={props} menus={props.menus}/>
                    <NavCheckboxContainer props={props}/>
                    {props.isFetching ? <Preloader/> : null}
                </div>
                <ProductPagesContainer basket={props.basket}
                                       products={filteredGoods}
                                       searchString={searchString}
                                       currentPage={props.currentPage}
                                       todosPerPage={props.todosPerPage}
                />
            </div>
        </div>
    );
}

export default Body
