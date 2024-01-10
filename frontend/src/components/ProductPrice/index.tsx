import { formatPrice } from "Util/formatters";
import "./styles.css";

type Props = {
  price: number;
};

function ProductPrice({ price }: Props) {
  return (
    <div className="product-price-container">
      <span>R$</span>
      <h3>{formatPrice(price)}</h3>
    </div>
  );
}

export default ProductPrice;
