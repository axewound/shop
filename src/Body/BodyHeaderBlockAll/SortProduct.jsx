import React, { useState, useEffect } from 'react';



    function SortProduct(props) {
        const bands = props.props.filteredGoods
        const [data, setData] = useState([]);
        const [sortType, setSortType] = useState('title');

        useEffect(() => {
            const sortArray = type => {
                const types = {
                    title: 'title',
                    members: 'members',
                    price: 'price',
                };
                const sortProperty = types[type];
                const sorted = [...bands].sort((a, b) => b[sortProperty] - a[sortProperty]);
                setData(sorted);
            };

            sortArray(sortType);
        }, [sortType]);

        return (
            <div className="App">
                <select onChange={(e) => setSortType(e.target.value)}>
                    <option value="title">title</option>
                    <option value="id">id</option>
                    <option value="price">price in</option>
                </select>

                {data.map(band => (
                    <div key={band.id} style={{margin: '30px'}}>
                        <div>{`Band: ${band.name}`}</div>
                        <div>{`title: ${band.title}`}</div>
                        <div>{`Members: ${band.id}`}</div>
                        <div>{`Year of founding: ${band.price}`}</div>
                    </div>
                ))}
            </div>
        );
}


export default SortProduct;