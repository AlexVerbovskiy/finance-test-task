import { formatDate } from "../../utils";

const ProductCard = props => {
  return (
    <tr className="border-b">
      {Object.keys(props).map((key, index) => {
        const className =
          index === 0
            ? "text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
            : "text-sm text-gray-900 font-light text-center px-6 py-4 whitespace-nowrap";

        const data =
          key === "last_trade_time" ? formatDate(props[key]) : props[key];

        return (
          <td className={className} key={index}>
            {data}
          </td>
        );
      })}
    </tr>
  );
};

export default ProductCard;
