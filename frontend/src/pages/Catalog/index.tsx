import "./styles.css";
import { Product } from "types/product";
import ProductCard from "components/ProductCard";
import { Link } from "react-router-dom";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { SpringPage } from "types/vendor/spring";
import { AxiosParams } from "types/vendor/axios";
import { BASE_URL } from "Util/requests";
import axios from "axios";
import CardLoader from "./CardLoader";

function Catalog() {
  const [page, setPage] = useState<SpringPage<Product>>();
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const params: AxiosParams = {
      method: "GET",
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12,
      },
    };

    setIsloading(true);
    axios(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  return (
    <div className=" container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Catálogo de Produtos</h1>
      </div>

      <div className="row">
        {isLoading ? (
          <CardLoader />
        ) : (
          page?.content.map((product) => {
            return (
              <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
                <Link to="/products/1">
                  <ProductCard product={product} />
                </Link>
              </div>
            );
          })
        )}
      </div>
      <div className="row">
        <Pagination />
      </div>
    </div>
  );
}

export default Catalog;
