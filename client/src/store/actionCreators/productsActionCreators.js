import {
    SET_PRODUCTS,
} from "../actions";


export const setProducts = products => ({
    type: SET_PRODUCTS,
    payload: products
});