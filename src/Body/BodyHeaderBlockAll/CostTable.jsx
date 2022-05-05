import React, {useState} from 'react';
import ProductPages from "../ProductPage";


const PriceInput = ({ index, ...props }) => (
    <input className="price-input" data-index={index} {...props} />
);

const PriceFilter = ({ props, value, onChange, }) => (
    <div>
        <PriceInput value={value[0]} onChange={onChange} index="0" />
        &nbsp;-&nbsp;
        <PriceInput value={value[1]} onChange={onChange} index="1" />
        &nbsp;usd&nbsp;
    </div>
);


const GoodsList = ( { products,searchString,props } ) => (
    <div>
        {products.map(n => (
            <div className="good" key={n.id}>
                <p>Цена: {n.price}</p>
                <p>Title: {n.title}</p>
            </div>
        ))}
    </div>
);

const CostTable = ({ products,searchString,props }) => {


    const [ price, setPrice ] = React.useState([ '', '' ]);

    const onPriceChange = ({ target: { value, dataset: { index } } }) => {
        setPrice(price.map((n, i) => i === +index ? value : n));
        console.log()
    };

    const filteredGoods = products.filter(n => (

        (!price[0] || price[0] <= n.price) &&
        (!price[1] || price[1] >= n.price)
    ));

    function SpeedDetector(props) {
        props.productPeredal(filteredGoods)
    }



    return (
        <div>
            <div className="filters">
                <PriceFilter value={price} onChange={onPriceChange} />
            </div>
            {/*           <GoodsList products={filteredGoods} />*/}
            <ProductPages products={filteredGoods}  searchString={searchString}/>
        </div>
    );
}

export default CostTable
