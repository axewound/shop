import React, {useState} from 'react';
import ProductPages from "../ProductPage";
import SortProduct from "./SortProduct";
import SearchProductContainer from "./SearchProductContainer";
import ProductPagesContainer from "../ProductPageContainer";
import NavBarBodyLeft from "../NavBarLeft/NavBarBodyLeft";
import Preloader from "../../assets/Preloader";
import NavBarBodyLeftContainer from "../NavBarLeft/NavBarBodyLeftContainer";


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


const GoodsList = ({products, searchString, props}) => (
    <div>
        {products.map(n => (
            <div className="good" key={n.id}>
                <p>Цена: {n.price}</p>
                <p>Title: {n.title}</p>
            </div>
        ))}
    </div>
);

const CostTable = ({products, searchString, props}) => {
    /*    console.log(props)*/

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
                    handleChange={props.handleChange}
                />
                <SearchProductContainer/>
                <PriceFilter value={price} onChange= { onPriceChange}/>
            </div>
            <div style={{display: "flex"}}>

                <NavBarBodyLeftContainer props={props}menus={props.menus} />
                {props.isFetching ? <Preloader/> : null}
            <ProductPagesContainer basket={props.basket}  isFetching={props.isFetching} products={filteredGoods} searchString={searchString}/>
            </div>
        </div>
    );
}

export default CostTable
