import {
    SET_PRODUCTS,
    REWRITE_PRODUCT
} from "../actions";
import {
    compareProducts,
    compareProduct
} from "../../utils"

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
        case REWRITE_PRODUCT: {
            const findedProduct = state.gettedProducts.find(product => product.ticker === action.payload.ticker);

            const gettedProducts = state.gettedProducts.filter(product => product.ticker !== action.payload.ticker);
            const products = state.products.filter(product => product.ticker !== action.payload.ticker);
            const resCompare = compareProduct({
                ...findedProduct
            }, {
                ...action.payload
            });


            const newStateGattedProducts = [...gettedProducts, {
                ...action.payload
            }];
            const newStateProducts = [...products, {
                ...resCompare
            }];

            return {
                gettedProducts: newStateGattedProducts,
                products: newStateProducts
            };
        }
        default:
            return state
    }
}