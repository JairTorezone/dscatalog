import "./styles.css";
import { ReactComponent as ArrowIcon } from "assets/images/arrow.svg";

import ProductPrice from "components/ProductPrice";

function ProductDetails() {
  return (
    <div className="product-details-container">
      <div className="base-card  product-details-card">
        <div className="goback-container">
          <ArrowIcon />
          <h2>Voltar</h2>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img
                src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
                alt="nome produto"
              />
            </div>
            <div className="name-price-container">
              <h1>Computador - Intel Core i7</h1>
              <ProductPrice price={2345.67} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição do produto</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia recusandae quis aut qui perferendis dicta consequuntur
                alias a! Laborum sit cum quasi expedita, aliquam exercitationem
                asperiores consectetur dolorum inventore adipisci. Numquam
                magni, labore maiores veritatis quam fuga quo cupiditate quis
                porro! Dolore magni exercitationem nostrum eveniet itaque,
                placeat eius voluptatum voluptates laborum neque atque sunt
                debitis ab expedita ipsum at. Debitis quidem, quo est nisi
                ipsum, tenetur in odio natus dolor tempora eveniet numquam.
                Modi, quos nulla provident, perferendis quisquam tenetur itaque
                facilis quaerat vitae libero placeat laborum optio a! Quia,
                repudiandae perferendis ipsa magnam quisquam facilis sed placeat
                eligendi autem repellat deserunt dignissimos sequi eius
                obcaecati fugit voluptatibus amet non nemo quas. Dolores
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
