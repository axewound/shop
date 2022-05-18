import {usersAPI} from "../api/api";
import React from "react";
import {act} from "react-dom/test-utils";

const SET_PRODUCT = 'SET_PRODUCT';
const Z_A = "Z_A";
const A_Z = "A_Z"
const Low_rating = "Low_rating"
const High_rating = "High_rating"
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SER = "SER"
/*const SER23 = "SER23"*/
const BASKET = "BASKET"
const BASKETDELETE = "BASKETDELETE"
const INCREASE_QUANTITY = "INCREASE_QUANTITY"
const DECREASE_QUANTITY = "DECREASE_QUANTITY"
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PRODUCT_EXECT = 'SET_PRODUCT_EXECT'
const CHECKBOX = "CHECKBOX"
const SLIDERID = "SLIDERID"
const NAVLINKSEARCH = "NAVLINKSEARCH"

let initialState = {
    numberCart: 0,
    Carts: [],
    products: [],
    isFetching: true,
    profile: {},
    post: [],
    allPosts: [],
    searchString: "",
    count: 1,
    value: "",
    basketProduct: [],
    totalPrice: 0,
    basketDelete: [{
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {"rate": 3.9, "count": 120}
    }],
    filteredGoods: [],
    textId:0,
    textnav : [
        {name: "Top Sales", id: 1, active:false},
        {name: "Brand Focus", id: 2,active:false},
        {name: "Hi-tech", id: 3,active:false},
        {name: "Best Sellers", id: 4,active:false},
        {name: "Projects", id: 5,active:false},
    ],
    uniqueArr:[{}],
    currentPage:1,
    todosPerPage: 6
};

function strip(title) {
    return title.replace(/^(a|an|the)\s/i, "");
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PRODUCT_EXECT: {

            switch (action.label) {
                case "Top Sales": {


                }
                case action.label: {


                    return {
                        ...state,
                        products: state.filteredGoods.filter(word => word.category === action.label.toLowerCase())
                    }
                }
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_PRODUCT: {

            return {...state, products: action.products, filteredGoods: action.products, uniqueArr : [... new Set(action.products.map(data => data.category))]}
        }
        case Low_rating:
            return {
                ...state,
                products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1))
            };
        case High_rating:
            return {
                ...state,
                products: state.products.sort((a, b) => (b.price > a.price ? 1 : -1))
            }
        case A_Z:
            return {
                ...state,
                products: state.products.sort((a, b) =>
                    strip(a.title) > strip(b.title) ? 1 : -1)
            }
        case Z_A:
            return {
                ...state,
                products: state.products.sort((a, b) =>
                    strip(b.title) > strip(a.title) ? 1 : -1
                )
            }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SER: {
            return {
                ...state,
                searchString: action.searchString,
            }

        }
/*        case SER23: {
            return {...state, profile: action.profile, /!*filteredGoods: action.filteredGoods*!/}

        }*/
        case
        BASKET:
            if (state.numberCart === 0) {
                let cart = {
                    id: action.userId,
                    quantity: 1,
                    name: action.title,
                    price: action.price,
                    image: action.image,
                }
                state.basketProduct.push(cart);
            } else {
                let check = false;
                state.basketProduct.map((item, key) => {
                    if (item.id === action.userId) {
                        state.basketProduct[key].quantity++;
                        state.basketProduct[key].price+= action.price

                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {
                        id: action.userId,
                        quantity: 1,
                        name: action.title,
                        price: action.price,
                        image: action.image
                    }
                    state.basketProduct.push(_cart);
                }
            }

            return {
                ...state,
                numberCart: state.numberCart + 1,
                basketProduct: [...state.basketProduct],
                totalPrice: state.totalPrice + action.price
            }
        case
        INCREASE_QUANTITY:
            state.basketProduct.map((item, key) => {
                if (item.id === action.userId) {
                    state.basketProduct[key].quantity++;
                    state.basketProduct[key].price += action.price;

                }
            })
            return {
                ...state,
                basketProduct: [...state.basketProduct],
                totalPrice: state.totalPrice + action.price
            }
        case
        DECREASE_QUANTITY:
            state.basketProduct.map((item, key) => {
                if (item.id === action.userId) {
                    state.basketProduct[key].quantity--;
                    if (state.basketProduct[key].quantity === 0) {
                        let idBase = state.basketProduct.findIndex(el => el.id === item.id)
                        state.basketProduct.splice(idBase, 1)
                        if (state.basketProduct === 0){
                            return state.basketProduct
                        }
                    }
                }
            })
            return {
                ...state,
                basketProduct: [...state.basketProduct],
                totalPrice: state.totalPrice - action.price

            }
        case
        BASKETDELETE:
            return {
                ...state,

                basketProduct: state.basketProduct.filter((item) => {
                    return item.id !== action.userId
                })
            }

        case CHECKBOX:

            if (action.che) {
                return {
                    ...state,
                    products: state.products.filter((row) => row.rating.rate >= 4.0)

                }
            } else {
                return {
                    ...state,
                    products: state.filteredGoods

                }
            }
        case SLIDERID:
/*
            state.textnav.map((item) => {
                return item.id === action.id
            })*/

            return {


                ...state,
                textId:action.id


            }
        case
        NAVLINKSEARCH:
           /* const uniqueArr = [... new Set(props.filteredGoods.map(data => data.category))]*/

            return {
                ...state,

            }
        default:
            return state;
    }
}
export const sliderId = (id) => ({type: SLIDERID, id})
export const navLinkSearch = (products) => ({type: NAVLINKSEARCH, products})


export const setCheckFunction = (che) => ({type: CHECKBOX, che})
export const setProductExect = (label) => ({type: SET_PRODUCT_EXECT, label})
export const setProduct = (products) => ({type: SET_PRODUCT, products})
export const ratingAC = (value) => (
    ({type: value})
)

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const searccch = (searchString) => ({type: SER, searchString})



export const basket = (userId, title, price, image) => ({type: BASKET, userId, title, price, image})
export const basketDelete = (userId) => ({type: BASKETDELETE, userId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export const increaseQuantity = (quantity, userId, price, products) => ({
    type: INCREASE_QUANTITY,
    quantity,
    userId,
    price,
    products
})
export const decreaseQuantity = (quantity, userId, price, products) => ({
    type: DECREASE_QUANTITY,
    quantity,
    userId,
    price,
    products
})

export const getProductThunk = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers().then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setProduct(data));
        });
    }
}
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export default productReducer;