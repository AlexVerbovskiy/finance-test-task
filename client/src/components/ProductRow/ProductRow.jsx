import { useState } from "react";
import ProductCell from "../ProductCell";

const ProductRow = ({
  product,
  handleSubscribeClick,
  handleUnsubscribeClick
}) => {
  const [subscribed, setSubscribed] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isIncorrectTimer, setIsIncorrectTimer] = useState(false);

  const handleStartClick = () => {
    if (timer > 0) {
      handleSubscribeClick(product.ticker, timer);
      setSubscribed(true);
    } else {
      setIsIncorrectTimer(true);
      setTimeout(() => setIsIncorrectTimer(false), 2000);
    }
  };

  const handleStopClick = () => {
    handleUnsubscribeClick(product.ticker);
    setSubscribed(false);
  };

  return (
    <tr className="border-b">
      {Object.keys(product).map((key, index) => {
        const className =
          index === 0
            ? "text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
            : "text-sm text-gray-900 font-light text-center px-6 py-4 whitespace-nowrap";

        return (
          <td className={className} key={key}>
            <ProductCell field={product[key]} fieldKey={key} />
          </td>
        );
      })}

      {!subscribed
        ? <td>
            <div className="flex items-center justify-center py-4 ">
              <div className="flex flex-col w-24 mr-2">
                <input
                  className="border-[1px]"
                  value={timer}
                  onChange={e => setTimer(e.target.value)}
                />
                {isIncorrectTimer &&
                  <span className="text-red-600">
                    Time must be more than zero
                  </span>}
              </div>
              <div>
                <button
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-[1px] px-4 border border-gray-400 rounded shadow"
                  onClick={handleStartClick}
                >
                  Start
                </button>
              </div>
            </div>
          </td>
        : <td className="text-center">
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-[1px] px-4 border border-gray-400 rounded shadow"
              onClick={handleStopClick}
            >
              Stop
            </button>
          </td>}
    </tr>
  );
};

export default ProductRow;
