export const compareProducts = (prevProducts, actualProducts) => {
    const res = [];

    const diff = (value1, value2) => parseInt((value1 - value2) / value1 * 100);

    actualProducts.forEach(actualProduct => {
        const resCompareProduct = {
            "ticker": actualProduct.ticker,
            "exchange": actualProduct.exchange,
            "price": {
                value: actualProduct.price,
                diff: 0
            },
            "change": {
                value: actualProduct.change,
                diff: 0
            },
            "change_percent": {
                value: actualProduct.change_percent,
                diff: 0
            },
            "dividend": {
                value: actualProduct.dividend,
                diff: 0
            },
            "yield": {
                value: actualProduct.yield,
                diff: 0
            },
            "last_trade_time": actualProduct.last_trade_time
        }

        prevProducts.forEach(prevProduct => {
            if (prevProduct.ticket !== actualProduct.ticket) return;

            resCompareProduct.price.diff = diff(actualProduct.price, prevProduct.price);
            resCompareProduct.change.diff = diff(actualProduct.change, prevProduct.change);
            resCompareProduct.change_percent.diff = diff(actualProduct.change_percent, prevProduct.change_percent);
            resCompareProduct.dividend.diff = diff(actualProduct.dividend, prevProduct.dividend);
            resCompareProduct.yield.diff = diff(actualProduct.yield, prevProduct.yield);
        });

        res.push({
            ...resCompareProduct
        })
    });

    return [...res];
}