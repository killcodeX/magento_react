import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SINGLE_PRODUCTS_MAGENTO } from "../../graphql/productQueries";

export default function ProductPage() {
  const params = useParams();
  console.log(params.id)
  const { loading, error, data } = useQuery(SINGLE_PRODUCTS_MAGENTO, {
    variables: { id: params.id },
  });

  useEffect(() => {
    console.log("from graphql api `data`-->>", data);
    console.log("from graphql api `error`-->>", JSON.stringify(error, null, 2));
    console.log("from graphql api `loading`-->>", loading);
  }, [data]);

  if (loading) return <p>Loading....</p>;

  if (error) return <p>Error</p>;
  return <div>This is ProductPage</div>;
}
