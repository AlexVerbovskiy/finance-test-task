import {
    productsReducer
} from '../reducers';
import {
    setProducts,
    rewriteProduct
} from '../actionCreators';


const products1 = [{
    "ticker": "GOOGL",
    "exchange": "NASDAQ",
    "price": 237.08,
    "change": 154.38,
    "change_percent": 0.10,
    "dividend": 0.46,
    "yield": 1.18,
    "last_trade_time": "2021-04-30T11:53:21.000Z"
}, {
    "ticker": "MSFT",
    "exchange": "NASDAQ",
    "price": 261.46,
    "change": 161.45,
    "change_percent": 0.41,
    "dividend": 0.18,
    "yield": 0.98,
    "last_trade_time": "2021-04-30T11:53:21.000Z"
}, ];

const resCompare1 = [{
    "ticker": "GOOGL",
    "exchange": "NASDAQ",
    "price": {
        "value": 237.08,
        "diff": 0
    },
    "change": {
        "value": 154.38,
        "diff": 0
    },
    "change_percent": {
        "value": 0.1,
        "diff": 0
    },
    "dividend": {
        "value": 0.46,
        "diff": 0
    },
    "yield": {
        "value": 1.18,
        "diff": 0
    },
    "last_trade_time": "2021-04-30T11:53:21.000Z"
}, {
    "ticker": "MSFT",
    "exchange": "NASDAQ",
    "price": {
        "value": 261.46,
        "diff": 0
    },
    "change": {
        "value": 161.45,
        "diff": 0
    },
    "change_percent": {
        "value": 0.41,
        "diff": 0
    },
    "dividend": {
        "value": 0.18,
        "diff": 0
    },
    "yield": {
        "value": 0.98,
        "diff": 0
    },
    "last_trade_time": "2021-04-30T11:53:21.000Z"
}, ]

const products2 = [{
    "ticker": "GOOGL",
    "exchange": "NASDAQ",
    "price": 240,
    "change": 240,
    "change_percent": 0.20,
    "dividend": 0.4,
    "yield": 1.4,
    "last_trade_time": "2021-04-30T11:53:21.000Z"
}];

const resCompare2 = [{
    "ticker": "GOOGL",
    "exchange": "NASDAQ",
    "price": {
        "value": 240,
        "diff": 1
    },
    "change": {
        "value": 240,
        "diff": 35
    },
    "change_percent": {
        "value": 0.2,
        "diff": 50
    },
    "dividend": {
        "value": 0.4,
        "diff": -15
    },
    "yield": {
        "value": 1.4,
        "diff": 15
    },
    "last_trade_time": "2021-04-30T11:53:21.000Z"
}];


describe('redux products reducer', () => {
    it('should return default state', () => {
        const res = productsReducer(undefined, {
            type: ''
        });

        expect(res).toEqual({
            products: [],
            gettedProducts: []
        })
    });

    it('should return state.products with zero diff on number keys when products added for first time ', () => {

        const defaultState = {
            products: [],
            gettedProducts: []
        }

        const gettedProducts = [...products1];

        const res = productsReducer(defaultState, setProducts(gettedProducts));

        expect(res.products).toEqual([...resCompare1]);
    });

    it('should return state.products with correct diff on number keys when products added not for first time', () => {

        const defaultState = {
            gettedProducts: [products1[0]],
            products: [resCompare1[0]]
        }

        const gettedProducts = [...products2];

        const res = productsReducer(defaultState, setProducts(gettedProducts));

        expect(res.products).toEqual([...resCompare2])
    });

    it('should return state.products with zero diff on number keys when product added for first time ', () => {

        const defaultState = {
            products: [],
            gettedProducts: []
        }

        const gettedProducts = products1[0];
        const res = productsReducer(defaultState, rewriteProduct(gettedProducts));
        expect(res.products).toEqual([resCompare1[0]]);
    });

    it('should return state.products with correct diff on number keys when product added not for first time', () => {

        const defaultState = {
            gettedProducts: [products1[0]],
            products: [resCompare1[0]]
        }

        const gettedProducts = products2[0];
        const res = productsReducer(defaultState, rewriteProduct(gettedProducts));
        expect(res.products).toEqual([resCompare2[0]])
    });

});