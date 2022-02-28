import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { PRODUCTS_MAGENTO } from "../../graphql/productQueries";
import { Spin } from "antd";
import "./products.css";

export default function Products() {
  const { loading, error, data } = useQuery(PRODUCTS_MAGENTO);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("from graphql api `data`-->>", data);
    console.log("from graphql api `error`-->>", JSON.stringify(error, null, 2));
    console.log("from graphql api `loading`-->>", loading);
    if (data) {
      setProducts(data.products.items);
    }
  }, [data]);

  if (loading)
    return (
      <section>
        <Spin size="large" />
      </section>
    );

  if (error) return <p>Error</p>;
  return (
    <div className="container mt-3 pt-5">
      <div className="row">
        {products?.map((item) => {
          return (
            <div className="col-md-3 mb-2" key={item.id}>
              <div className="product-container">
                <div className="upper-section">
                  <a href={`products/${item.sku}`}>
                    <img
                      src={
                        item?.image
                          ? item.image.url
                          : "https://dev-d2c.upscalio.com/pub/media/catalog/product/cache/c2437caef9429815de44d4cbc4080d7e/1/_/1_d7dcf5f9-73df-44bf-a6cd-b8ea5938aecc_960x.jpeg"
                      }
                      alt="products"
                    />
                  </a>
                </div>
                <div className="lower-section">
                  <div className="product-categories">
                    {item.categories.map((cat, index) => {
                      return <p key={index}>{cat.name}</p>;
                    })}
                  </div>
                  <p className="product-name">{item.name}</p>
                  <p className="product-price">
                    $ {item.price_range.minimum_price.final_price.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
