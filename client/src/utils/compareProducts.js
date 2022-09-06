export const compareProducts = (prevProducts, actualProducts) => {
    const res = [];

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

            resCompareProduct.price.diff = (actualProduct.price - prevProduct.price) / prevProduct.price;
            resCompareProduct.price.diff = (actualProduct.change - prevProduct.change) / prevProduct.change;
            resCompareProduct.price.diff = (actualProduct.change_percent - prevProduct.change_percent) / prevProduct.change_percent;
            resCompareProduct.price.diff = (actualProduct.dividend - prevProduct.dividend) / prevProduct.dividend;
            resCompareProduct.price.diff = (actualProduct.yield - prevProduct.yield) / prevProduct.yield;
        });

        res.push({
            ...resCompareProduct
        })
    });

    return [...res];
}