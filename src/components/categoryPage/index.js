import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Categories_Products } from "../../graphql/categoryQueries";
import { useQuery } from "@apollo/client";
import { Slider, Select, Spin } from "antd";
import "./categoryPage.css";

const { Option } = Select;

export default function CategoryPage() {
  const params = useParams();
  const { loading, error, data } = useQuery(Categories_Products, {
    variables: { id: params.id },
  });
  const [products, setProducts] = useState(null);

  useEffect(() => {
    // console.log("from graphql api `data`-->>", data);
    // console.log("from graphql api `error`-->>", JSON.stringify(error, null, 2));
    // console.log("from graphql api `loading`-->>", loading);
    if (data) {
      setProducts(data.products.items);
    }
  }, [data]);

  if (loading || !products)
    return (
      <section className="product-page d-flex justify-content-center">
        <Spin size="large" />
      </section>
    );

  if (error)
    return <section className="product-page bg-light">Error...</section>;

  const handleChange = (value) => {
    if (value == "lth") {
      let result = products.slice().sort((a, b) => {
        return (
          a.price_range.minimum_price.regular_price.value -
          b.price_range.minimum_price.regular_price.value
        );
      });
      setProducts(result);
    }

    if (value == "htl") {
      let result = products.slice().sort((a, b) => {
        return (
          b.price_range.minimum_price.regular_price.value -
          a.price_range.minimum_price.regular_price.value
        );
      });
      setProducts(result);
    }
  };

  return (
    <section className="product-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12 pb-4">
            <div className="categorypage-head">
              <div className="categorypage-breadcrumbs p-2">
                HOME / SHOP /{" "}
                <strong>
                  {params.category.split("-").join(" ").toUpperCase()}
                </strong>
              </div>
              <div className="categorypage-sorting d-flex align-items-center">
                <span>Showing all {data.products.total_count} results</span>
                <div className="sorting">
                  <Select
                    defaultValue="Default sorting"
                    onChange={handleChange}
                  >
                    <Option value="lth">Sort by price: low to high</Option>
                    <Option value="htl">Sort by price: high to low</Option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="categorypage-filter">
              <h2>Filters</h2>
              <div className="filters">
                <p>Filter By Price:</p>
                <Slider defaultValue={30} />
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              {products?.map((item) => {
                return (
                  <div className="col-md-4 mb-2" key={item.id}>
                    <div className="product-container">
                      <div className="upper-section">
                        <a href={`/products/${item.sku}`}>
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
                        <p className="product-name">{item.name}</p>
                        <p className="product-price">
                          $ {item.price_range.minimum_price.regular_price.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
