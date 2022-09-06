import {
    productsReducer
} from '../reducers';
import {
    setProducts
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
}]

describe('redux products reducer', () => {
    it('should return default state', () => {
        const res = productsReducer(undefined, {
            type: ''
        });

        expect(res).toEqual({
            products: [],
            gettedProducts: []
        })
    })

    it('should return state.products with zero diff on number keys when products added for first time ', () => {

        const defaultState = {
            products: [],
            gettedProducts: []
        }

        const gettedProducts = [...products1];

        const res = productsReducer(defaultState, setProducts(gettedProducts));

        expect(res.products).toEqual([...resCompare1]);
    })

    it('should return state.products with correct diff on number keys when products added not for first time', () => {

        const defaultState = {
            products: [{
                ...products1[0]
            }],
            gettedProducts: []
        }

        const gettedProducts = [{
            "ticker": "GOOGL",
            "exchange": "NASDAQ",
            "price": 237.08,
            "change": 154.38,
            "change_percent": 0.10,
            "dividend": 0.46,
            "yield": 1.18,
            "last_trade_time": "2021-04-30T11:53:21.000Z"
        }];

        const res = productsReducer(defaultState, setProducts(gettedProducts));

        expect(res.products).toEqual([{
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
        }, ], )
    })
});