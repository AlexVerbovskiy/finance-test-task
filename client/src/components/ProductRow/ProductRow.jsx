const ProductCard = props => {
  return (
    <tr className="border-b">
      {Object.keys(props).map((key, index) => {
        const className =
          index === 0
            ? "text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
            : "text-sm text-gray-900 font-light text-center px-6 py-4 whitespace-nowrap";

        return (
          <td className={className} key={index}>
            {props[key]}
          </td>
        );
      })}
    </tr>
  );
};

export default ProductCard;
