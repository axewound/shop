import {usersAPI} from "../api/api";

const SET_PRODUCT = 'SET_PRODUCT';
const Z_A = "Z_A";
const A_Z = "A_Z"
const Low_rating = "Low_rating"
const High_rating = "High_rating"
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SER = "SER"
const SERMINMAX = "SERMINMAX"
const BASKET = "BASKET"
const BASKETDELETE = "BASKETDELETE"
const INCREASE_QUANTITY = "INCREASE_QUANTITY"
const DECREASE_QUANTITY = "DECREASE_QUANTITY"
let initialState = {
    numberCart: 0,
    Carts: [],
    products: [],
    isFetching: true,
    profile: {},
    post: [],
    allPosts: [],
    searchString: "",
    /* price: {
         min: "",
         max: ""
     },*/
    min: "",
    max: "",
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
    }]
};

function strip(title) {
    return title.replace(/^(a|an|the)\s/i, "");
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT: {
            /*  return { ...state, products: [ ...state.products, ...action.products ]}*/

            return {...state, products: action.products}
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
            let _users = state.products;
            let search = state.searchString.trim().toLowerCase();

            if (search.length > 0) {
                _users = _users.filter(function (user) {
                    return user.title.toLowerCase().match(search);
                });
            }

            return {
                ...state,
                products: _users,
                searchString: action.searchString,
            }

        }
        case SERMINMAX: {
            let min = 0;
            let max = 10000
            if (action.name.name === "min") {
                min = Number(action.name.value)
            } else {
                max = Number(action.name.value)
            }
            return {
                ...state,
                products: state.products.filter((item) => {
                    return item.price >= min && item.price <= max
                })
            }

            /*     if (action.name.name === "min") {
                     let min = Number(action.name.value)
                     products: state.products.filter((item) => {
                             console.log(state.products)
                             return item.price >= min
                         })
                 } else {
                     let max = Number(action.name.value)
                     products: state.products.filter((item) => {
                         return item.price <= max
                     })
                 }*/


            /*    let a = Number(action.name.value)
                products: state.products.filter((item) => {
                    for (var prop in item) {
                        return item.price > a && item.price < 10000
                    }
                })*/
            /*       return {
                       ...state,
                       products: state.products

                       /!*      products: state.products.filter((item) => {
                                 for (var prop in item) {
                                     return item.price > a && item.price < 10000
                                 }
                             })*!/
                       /!* products: state.products.filter(products => products.price < a  && products.price > 30),*!/

                   }*/

        }
        case
        BASKET:

            if (state.numberCart === 0) {

                let cart = {
                    id: action.userId,
                    quantity: 1,
                    name: action.title,
                    price: action.price
                }

                state.basketProduct.push(cart);
            } else {


                let check = false;

                state.basketProduct.map((item, key) => {
                    if (item.id === action.userId) {
                        state.basketProduct[key].quantity++;

                        check = true;
                    }
                });
                if (!check) {

                    let _cart = {
                        id: action.userId,
                        quantity: 1,
                        name: action.title,
                        price: action.price
                    }

                    state.basketProduct.push(_cart);
                }

            }

            return {
                ...state,
                numberCart: state.numberCart + 1,
                basketProduct: [...state.basketProduct],
                totalPrice: state.totalPrice+ action.price
            }
        case
        INCREASE_QUANTITY:
            state.basketProduct.map((item, key) => {
                if (item.id === action.userId) {
                    state.basketProduct[key].quantity++;


                }
            })
            return {
                ...state,
                basketProduct: [...state.basketProduct],
                totalPrice: state.totalPrice+ action.price



            }

        case
        DECREASE_QUANTITY:
            state.basketProduct.map((item, key) => {
                if (item.id === action.userId) {
                    state.basketProduct[key].quantity--;


                    if (state.basketProduct[key].quantity === 0) {
                        let idBase = state.basketProduct.findIndex(el => el.id === item.id)
                        state.basketProduct.splice(idBase, 1)
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

        default:
            return state;
    }
}


export const setProduct = (products) => ({type: SET_PRODUCT, products})
export const ratingAC = (value) => (
    ({type: value})
)

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const searccch = (searchString) => ({type: SER, searchString})
export const searchMixMax = (name) => (
    {type: SERMINMAX, name}
)
export const basket = (userId, title, price) => ({type: BASKET, userId, title, price})
export const basketDelete = (userId) => ({type: BASKETDELETE, userId})


export const increaseQuantity = (quantity, userId,price) => ({type: INCREASE_QUANTITY, quantity, userId,price})
export const decreaseQuantity = (quantity, userId,price) => ({type: DECREASE_QUANTITY, quantity, userId,price})

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
        dispatch(setProduct(response.data));
    });
}

export default productReducer;