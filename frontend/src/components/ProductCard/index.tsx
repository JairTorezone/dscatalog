import "./styles.css";
import ProductImg from "../../assets/images/product.png";
import ProductPrice from "components/ProductPrice";

function ProductCard() {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="nome do produto" />
      </div>
      <div className="card-bottom-container">
        <h6>Computador Desktop - Intel Core i7</h6>
        <ProductPrice />
      </div>
    </div>
  );
}

export default ProductCard;
