import { formatDate } from "../../utils";

const ProductCell = ({ field, fieldKey }) => {
  if (fieldKey === "last_trade_time")
    return (
        <>{formatDate(field)}</>
    );
  if (field.diff === undefined)
    return (
        <>{field}</>
    );

  if (field.diff === 0)
    return (
        <>{field.value}</>
    );
  if (field.diff > 0)
    return (
      <span className="text-green-500">
        {field.value}&#x2191;<sup>{field.diff}%</sup>
      </span>
    );
  if (field.diff < 0)
    return (
      <span className="text-red-500">
        {field.value}&#x2193;<sub>{field.diff}%</sub>
      </span>
    );

  return <>NaN</>;
};

export default ProductCell;
