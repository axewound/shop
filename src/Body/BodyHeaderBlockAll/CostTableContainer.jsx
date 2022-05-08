import React, {useState} from 'react';
import ProductPages from "../ProductPage";
import SortProduct from "./SortProduct";
import SearchProductContainer from "./SearchProductContainer";
import ProductPagesContainer from "../ProductPageContainer";
import NavBarBodyLeft from "../NavBarLeft/NavBarBodyLeft";
import Preloader from "../../assets/Preloader";
import NavBarBodyLeftContainer from "../NavBarLeft/NavBarBodyLeftContainer";
import Checkbox from "../NavBarLeft/NavCheckbox";
import NavCheckboxContainer from "../NavBarLeft/NavCheckboxContainer";
import LanguageSelected from "./Language";
import {LOCALES} from "../../assets/i18n/locales";
import Header from "../../Header/Header";

/**
 * Stores recently viewed urls to local storage along with their view times
 *
 * @param {String} key - the localStorage key where the list is stored
 * @param {String} url - the location of the page that was viewed
 * @param {Object} json - arbitrary json blob associated with a url
 * @param {Integer} limit - the max number of urls to save
 */
function addToRecentlyViewed(key, url, json, limit) {

    var viewedAt = Date.now(),
        recentlyViewed = localStorage[key],
        alreadyInRecents = false,
        limit = (limit) ? limit : 20;

    // initialize the local storage recent views if it hasn't been

    try {
        recentlyViewed = (recentlyViewed) ? JSON.parse(recentlyViewed) : [];
    } catch (e) {
        console.log('Error parsing json of recently viewed items');
        recentlyViewed = [];
    }

    // if the url is already in the set, update the view time and the data

    for (var i = 0; i < recentlyViewed.length && !alreadyInRecents; i++) {
        debugger
        if (recentlyViewed[i]["url"] && recentlyViewed[i]["url"] === url) {
            recentlyViewed[i]["viewedAt"] = viewedAt;
            recentlyViewed[i]["json"] = json;
            alreadyInRecents = true;
        }
    }

    // add the url to the recently viewed list if it wasn't updated in place

    if (!alreadyInRecents) {

        recentlyViewed.unshift({url: url, viewedAt: viewedAt, json: json});
    }

    // sort urls by recently viewed times descending

    recentlyViewed.sort(function (a, b) {

        if (a.viewedAt > b.viewedAt) return -1;
        if (a.viewedAt < b.viewedAt) return 1;
        return 0;
    });

    // save a limited list of recently viewed items to local storage

    localStorage[key] = JSON.stringify(recentlyViewed.slice(0, limit));
    console.log(localStorage)
}

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
                <PriceFilter value={price} onChange={onPriceChange}/>
                <LanguageSelected currentLocale={props.currentLocale} handleChange={props.handleChange} />
            </div>
            {console.log(props)}
            <div style={{display: "flex"}}>
                <div>
                    <NavBarBodyLeftContainer props={props} menus={props.menus}/>
                    <NavCheckboxContainer props={props} menus={props.menus} products={filteredGoods}
                                          searchString={searchString}/>
                    {props.isFetching ? <Preloader/> : null}
                </div>
                {/*                {console.log(props.products.length >=0)}
                {console.log(props)}
                {props.filteredGoods.length >= 0 ?
                    <ProductPagesContainer basket={props.basket} isFetching={props.isFetching} products={filteredGoods}
                                           searchString={searchString}/>:<Preloader/>

                }*/}
                <ProductPagesContainer basket={props.basket} isFetching={props.isFetching} products={filteredGoods}
                                       searchString={searchString}/>
            </div>
        </div>
    );
}

export default CostTable
