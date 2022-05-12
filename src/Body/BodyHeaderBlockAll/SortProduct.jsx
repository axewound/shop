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


/*
import { useState } from "react";
function SortProduct({lol, sortPlayers,lol2}) {

console.log(2)
    return (
        <div className="App">
            <select onChange={sortPlayers}>
                <option value="a-v">A - v</option>
                <option value="a-z">A - Z</option>
                <option value="z-a">Z - A</option>
            </select>
                {/!*{lol.map((player, index) => (
                <p key={index}>{player}</p>
            ))}*!/}
            <span>Sort by</span>

            <form>
                <select id="rating-filter"  onChange={sortPlayers}>
                    {/!*{lol.map((player, index) => (
                        <p key={index}>{player}</p>
                    ))}*!/}
                    <option value="Sort">Sort</option>
                    <option value="Low_rating">Low rating</option>
                    <option value="High_rating">High rating</option>
                    <option value="A_Z">A-Z</option>
                    <option value="Z_A">Z-A</option>
                </select>
            </form>

        </div>
    );
}





export default SortProduct






*/















