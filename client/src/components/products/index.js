import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { PRODUCTS_MAGENTO } from "../../graphql/productQueries";

export default function Products() {
  const { loading, error, data } = useQuery(PRODUCTS_MAGENTO);
  const [products, setProducts] = useState([])

  useEffect(() => {
    console.log("from graphql api `data`-->>", data);
    console.log("from graphql api `error`-->>", JSON.stringify(error, null, 2));
    console.log("from graphql api `loading`-->>", loading);
    if(data){
        setProducts(data.products.items)
    }
  }, [data]);

  if (loading) return <p>Loading....</p>;

  if (error) return <p>Error</p>;
  return (
    <div className='container'>
      <h3>Products</h3>
      {console.log(products)}
      {
          products?.map(item => {
              return(
                  <div className='conatiners' key={item.id}>
                      <p><strong>Name:</strong>{item.name}</p>
                      {/* <img src={} alt='products' /> */}
                  </div>
              )
          })
      }
    </div>
  );
}
