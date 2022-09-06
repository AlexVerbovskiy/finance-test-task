import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ProductRow from "../ProductRow/ProductRow";
import { subscribeTickers, subscribeTicker } from "../../utils";
import { useMainSubscription } from "../../hooks";

const ProductTable = ({
  products,
  handleSubscribeClick,
  handleUnsubscribeClick
}) => {
  const headers = [
    "Ticker",
    "Exchange",
    "Price",
    "Change",
    "Change percent",
    "Dividend",
    "Yield",
    "Last trade time",
    "Add/remove timer"
  ];

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
            <ProductRow
              key={product.ticker}
              product={product}
              handleSubscribeClick={handleSubscribeClick}
              handleUnsubscribeClick={handleUnsubscribeClick}
            />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
