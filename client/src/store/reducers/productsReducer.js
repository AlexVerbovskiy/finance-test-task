import {
    SET_PRODUCTS,
} from "../actions";
import {compareProducts} from "../../utils"

const initialStore = {
    products: [],
    gettedProducts: []
}

export const productsReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            const resComparePrevActual = compareProducts(state.gettedProducts, action.payload);
            return {
                gettedProducts: [...action.payload],
                products: [...resComparePrevActual]
            };
        }
        default:
            return state
    }
}