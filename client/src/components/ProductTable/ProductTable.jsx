import ProductRow from "../ProductRow/ProductRow";
import { compareProducts } from "../../utils";

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
      price: 240,
      change: 240,
      change_percent: 0.2,
      dividend: 0.4,
      yield: 1.4,
      last_trade_time: "2021-04-30T11:53:21.000Z"
    }
  ];

  console.log(
    compareProducts(
      [
        {
          ticker: "GOOGL",
          exchange: "NASDAQ",
          price: 237.08,
          change: 154.38,
          change_percent: 0.1,
          dividend: 0.46,
          yield: 1.18,
          last_trade_time: "2021-04-30T11:53:21.000Z"
        }
      ],
      products
    )
  );

  return (
    <div className="w-full flex justify-center items-center">
      <table className="min-w-full">
        <thead className="border-b">
          <tr>
            {headers.map(header =>
              <th
                key={header}
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
              >
                {header}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) =>
            <ProductRow key={index} {...product} />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
