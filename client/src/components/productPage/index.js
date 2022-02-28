import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SINGLE_PRODUCTS_MAGENTO } from "../../graphql/productQueries";
import "./productpage.css";

export default function ProductPage() {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const { loading, error, data } = useQuery(SINGLE_PRODUCTS_MAGENTO, {
    variables: { id: params.id },
  });

  useEffect(() => {
    console.log("from graphql api `data`-->>", data);
    console.log("from graphql api `error`-->>", JSON.stringify(error, null, 2));
    console.log("from graphql api `loading`-->>", loading);
    if(data){
        setSingleProduct(data.products.items[0])
    }
  }, [data]);

  if (loading || !singleProduct)
    return <section className="product-page bg-light">Loading....</section>;

  if (error)
    return <section className="product-page bg-light">Error...</section>;
  return (
    <section className="product-page bg-light">
        {console.log(singleProduct)}
      <div className="container">
          <div className='row'>
              <div className='col-sm-6 d-flex justify-content-end'>
                  <div className='product-image-container'>
                      <img src={singleProduct?.image?.url} alt={singleProduct.name} />
                  </div>
              </div>
              <div className='col-sm-6 p-5'>
                  <h3 className='product-categories'>
                      {
                          singleProduct.categories.map(cat => {
                              return <p>{cat.name} /</p>
                          })
                      }
                  </h3>
                  <h1 className="single-product-name">{singleProduct.name}</h1>
                  <h4 className="single-product-price">$ {singleProduct.price_range.minimum_price.final_price.value}</h4>
                  <p className='single-product-meta-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Availabel on:</p>
                  <div className='ecommerce-sites'>
                      <a href={singleProduct.amazon_link}>
                      <img className='amazon-img' src={process.env.PUBLIC_URL + "/media/amazon.png"} alt='amazon' />
                      </a>
                      <a href={singleProduct.myntra_link}>
                      <img className='myntra-img' src={process.env.PUBLIC_URL + "/media/myntra.png"} alt='myntra' />
                      </a>
                      <a href={singleProduct.flipkart_link}>
                      <img className='flipkart-img' src={process.env.PUBLIC_URL + "/media/flipkart.png"} alt='flipkart' />
                      </a>
                      <a href={singleProduct.meesho_link}>
                      <img className='meesho-img' src={process.env.PUBLIC_URL + "/media/meesho.png"} alt='meesho' />
                      </a>
                  </div>
              </div>
          </div>
          <hr/>
          <div className='row mt-3 mb-3'>
              <div className='col-md-12'>hi</div>
          </div>
      </div>
    </section>
  );
}
