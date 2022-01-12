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

let initialState = {
    products: [],
    isFetching: true,
    profile: {},
    post: [],
    allPosts: [],
    searchString: "",
    price: {
        min: "",
        max: ""
    },
    min: "",
    max: "",
    count: 1,
    basketProduct: [],
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
            return {
                ...state,
                searchString: action.searchString,
            }

        }
        case SERMINMAX: {
            console.log(action.name)
            console.log(state)
            for (let key in action.name) {

            }
            return {
                ...state,
                ...state.max,
                ...state.min,

                price: {
                    max: action.name.value,
                    min: action.name.name["min"],
                }


                /* max: action.price.value,
                 min: action.price.value,*/
            }

        }
        case BASKET:
            /*         console.log(action.userId)
                     console.log(state)
                     if (state.basketProduct.map(e => e.id === action.userId)) {

                         console.log(true)
                     } else {
                         console.log(false);
                     }*/
            let newPost = {
                id: action.userId,
                title: action.title,
                count: state.count++
            };


            return {
                ...state,
                basketProduct: [...state.basketProduct, newPost],
            }
        case BASKETDELETE:


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
export const basket = (userId, title) => ({type: BASKET, userId, title})
export const basketDelete = (userId) => ({type: BASKETDELETE, userId})

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