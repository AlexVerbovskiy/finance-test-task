import {
    SET_PRODUCTS,
} from "./actions";

const initialStore = {
    products: [],
}

export const productsReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: [...action.payload]
            };
        default:
            return state
    }
}