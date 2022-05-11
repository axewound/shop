import React from 'react';

const SortProduct = (props) => {
    return (
        <div>
            <span>Sort by</span>

            <form>
                <select id="rating-filter" value={props.value} onChange={props.handleChange}>
                    <option value="Sort">Sort</option>
                    <option value="Low_rating">Low rating</option>
                    <option value="High_rating">High rating</option>
                    <option value="A_Z">A-Z</option>
                    <option value="Z_A">Z-A</option>
                </select>
            </form>
        </div>
    )
}


export default SortProduct;