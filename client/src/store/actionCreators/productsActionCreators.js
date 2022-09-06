import {
    SET_PRODUCTS,
    REWRITE_PRODUCT
} from "../actions";


export const setProducts = products => ({
    type: SET_PRODUCTS,
    payload: products
});

export const rewriteProduct = product => ({
    type: REWRITE_PRODUCT,
    payload: product
});