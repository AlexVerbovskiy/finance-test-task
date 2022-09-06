import ProductRow from "../ProductRow/ProductRow";

const ProductList = () => {
  const headers = [
    "Ticker",
    "Exchange",
    "Price",
    "Change",
    "Change percent",
    "Dividend",
    "Yield",
    "Last trade time"
  ];
  const products = [
    {
      ticker: "GOOGL",
      exchange: "NASDAQ",
      price: 237.08,
      change: 154.38,
      change_percent: 0.1,
      dividend: 0.46,
      yield: 1.18,
      last_trade_time: "2021-04-30T11:53:21.000Z"
    },
    {
      ticker: "MSFT",
      exchange: "NASDAQ",
      price: 261.46,
      change: 161.45,
      change_percent: 0.41,
      dividend: 0.18,
      yield: 0.98,
      last_trade_time: "2021-04-30T11:53:21.000Z"
    },
    {
      ticker: "AMZN",
      exchange: "NASDAQ",
      price: 260.34,
      change: 128.71,
      change_percent: 0.6,
      dividend: 0.07,
      yield: 0.42,
      last_trade_time: "2021-04-30T11:53:21.000Z"
    },
    {
      ticker: "FB",
      exchange: "NASDAQ",
      price: 266.77,
      change: 171.92,
      change_percent: 0.75,
      dividend: 0.52,
      yield: 1.31,
      last_trade_time: "2021-04-30T11:53:21.000Z"
    },
    {
      ticker: "TSLA",
      exchange: "NASDAQ",
      price: 272.13,
      change: 158.76,
      change_percent: 0.1,
      dividend: 0.96,
      yield: 1.0,
      last_trade_time: "2021-04-30T11:53:21.000Z"
    }
  ];
  return (
    <div class="w-full flex justify-center items-center">
      <table className="min-w-full">
        <thead className="border-b">
          <tr>
            {headers.map(header =>
              <th
                key={header}
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
              >
                {header}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {products.map(product => <ProductRow {...product} />)}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
