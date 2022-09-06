import ProductRow from "../ProductRow/ProductRow";
import { compareProducts } from "../../utils";
import { useConnectServer, useSubscribeMainEvent } from "../../hooks";
import { useEffect } from "react";
import { useSelector } from "react-redux";

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
  const products = useSelector(state => state.products.gettedProducts);

  const socket = useConnectServer();
  useSubscribeMainEvent(socket);

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
