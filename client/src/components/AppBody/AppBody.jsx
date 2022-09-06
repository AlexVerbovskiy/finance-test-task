import ProductTable from "../ProductTable";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { subscribeTickers, subscribeTicker } from "../../utils";
import { useMainSubscription } from "../../hooks";

const AppBody = () => {
  const [
    socket,
    unsubscribeDefaultEvent,
    hasUnsubscribe
  ] = useMainSubscription();

  const products = useSelector(state => state.products.products);
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
    console.log(subscribers);
    subscribers[key]();
    console.log(subscribers);
    delete subscribers[key];
    console.log(subscribers);
  };

  return (
    <div>
      <button onClick={() => mainSubscribeClick()}>
        {hasAnyMainSubscriber ? "Unsubscribe" : "Subscribe"}
      </button>
      <ProductTable
        handleSubscribeClick={productSubscribeClick}
        handleUnsubscribeClick={productUnsubscribeClick}
        products={products.sort(comparatorSort)}
      />
    </div>
  );
};

export default AppBody;
