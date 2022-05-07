
import {usersAPI} from "../api/api";
import React from "react";
import initialState from "../redux/product-reducer"
import productReducer from "../redux/product-reducer";

const SET_PRODUCT_EXECT = 'SET_PRODUCT_EXECT'

 const menus = [
    {
        label: "Top Sales",
    },
    {
        label: "Clothing",
        submenu: [
            {
                label: "Women's clothing"
            },
            {
                label: "Men's clothing"
            },
        ]
    },
    {
        label: "Hi-Tech",
        submenu: [
            {
                label: "Electronics"
            },
        ]
    },
    {
        label: "Jewelerys",
        submenu: [
            {
                label: "Jewelery"
            },
        ]
    },
    {
        label: "Sale",
    }
];


const labelReducer = (state = menus, action) => {
    switch (action.type) {
        case SET_PRODUCT_EXECT: {
   /*         switch (action.label) {
                case "Top Sales":{
                }
                case "Women's clothing":{
                }
                case "Men's clothing":{
                }
                case "Electronics":{
                }
                case "Jewelery":{
                }
                case "Sale":{
                }

                default:
                    return state;
            }*/
        }

        default:
            return state;

    }
}
export const setProductExect = (label) => ({type: SET_PRODUCT_EXECT, label})


export default labelReducer;