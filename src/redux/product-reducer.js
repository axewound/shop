import {usersAPI} from "../api/api";

const SET_PRODUCT = 'SET_PRODUCT';
const Z_A = "Z_A";
const A_Z = "A_Z"
const Low_rating = "Low_rating"
const High_rating = "High_rating"
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SER = "SER"

let initialState = {
    products: [],
    isFetching: true,
    profile: {},
    post: [],
    allPosts: [],
    searchString: ""
};

function strip(title) {
    return title.replace(/^(a|an|the)\s/i, "");
}

const productReducer = (state = initialState, action) => {
    /*console.log(state)*/
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
   /*             prodd:action.products,
                products: state.products.filter(element => {
                    if (action.searchString === "") {
                        return state
                    } else return element.title.toLowerCase().includes(action.searchString.toLowerCase())}
                    )*/

            }

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