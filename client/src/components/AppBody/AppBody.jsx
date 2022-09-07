import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { subscribeTickers, subscribeTicker } from "../../utils";
import { useMainSubscription } from "../../hooks";
import ProductTable from "../ProductTable";
import Timer from "../Timer";

const AppBody = () => {
  const [
    socket,
    unsubscribeDefaultEvent,
    hasUnsubscribe
  ] = useMainSubscription();

  const { products: tempProduct } = useSelector(state => state);
  const { products } = tempProduct;

  const [subscribers, setSubscribers] = useState({});
  const [mainSubscriber, setMainSubscriber] = useState(null);
  const [hasAnyMainSubscriber, setHasAnyMainSubscriber] = useState(false);

  const dispatch = useDispatch();

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
    if (socket) {
      const subscriber = subscribeTickers(socket, dispatch, true);
      setMainSubscriber(() => subscriber);
    }
    return;
  };

  const comparatorSort = (elem1, elem2) => {
    if (elem1.ticker > elem2.ticker) return 1;
    return -1;
  };

  const productSubscribeClick = (ticker, interval) => {
    const sub = subscribeTicker(socket, dispatch, { ticker, interval });
    setSubscribers(prev => {
      prev[ticker] = sub;
      return { ...prev };
    });
  };

  const productUnsubscribeClick = key => {
    subscribers[key]();
    delete subscribers[key];
  };

  return (
    <div>
      {hasAnyMainSubscriber && <Timer />}

      {products.length > 0 &&
        <ProductTable
          handleSubscribeClick={productSubscribeClick}
          handleUnsubscribeClick={productUnsubscribeClick}
          products={products.sort(comparatorSort)}
        />}

      <div className="flex align-center justify-center">
        <button
          onClick={() => mainSubscribeClick()}
          className="my-2 bg-white w-[60rem] hover:bg-gray-100 text-gray-800 font-semibold py-[1px] px-4 border border-gray-400 rounded shadow"
        >
          {hasAnyMainSubscriber
            ? "Unsubscribe main timer"
            : "Subscribe main timer"}
        </button>
      </div>
    </div>
  );
};

export default AppBody;
