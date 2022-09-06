import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ProductRow from "../ProductRow/ProductRow";
import { subscribeTickers, subscribeTicker } from "../../utils";
import { useMainSubscription } from "../../hooks";

const ProductTable = () => {
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

  const products = useSelector(state => state.products.products);

  const [
    socket,
    unsubscribeDefaultEvent,
    hasUnsubscribe
  ] = useMainSubscription();
  const [subscribers, setSubscribers] = useState({});
  const [mainSubscriber, setMainSubscriber] = useState(null);
  const dispatch = useDispatch();
  const [hasAnyMainSubscriber, setHasAnyMainSubscriber] = useState(false);

  useEffect(
    () => {
      if (hasUnsubscribe) setHasAnyMainSubscriber(true);
      else if (mainSubscriber) setHasAnyMainSubscriber(true);
      else setHasAnyMainSubscriber(false);
    },
    [hasUnsubscribe, mainSubscriber]
  );

  const mainSubscribeClick = () => {
    if (hasUnsubscribe) return unsubscribeDefaultEvent();
    if (mainSubscriber) {
      mainSubscriber();
      setMainSubscriber(() => null);
      return;
    }
    const subscriber = subscribeTickers(socket, dispatch, true);
    setMainSubscriber(() => subscriber);
    return;
  };

  return (
    <div>
      <button onClick={() => mainSubscribeClick()}>
        {hasAnyMainSubscriber ? "Unsubscribe" : "Subscribe"}
      </button>
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
    </div>
  );
};

export default ProductTable;
