import React, { useEffect, useState } from "react";
import { All_Categories } from "../../graphql/categoryQueries";
import { useQuery } from "@apollo/client";

export default function Header() {
  const { loading, error, data } = useQuery(All_Categories);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    console.log("from graphql api `data`-->>", data);
    console.log("from graphql api `error`-->>", JSON.stringify(error, null, 2));
    console.log("from graphql api `loading`-->>", loading);
    if (data) {
      setCategories(data.categories.items[0].children);
    }
  }, [data]);

  if (loading || !categories)
    return (
      <nav className="navbar navbar-expand-lg  bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Trase
          </a>
          <div
            className="px-5 collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/category/mens">
                  Mens
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/category/womens">
                  Womens
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/category/kids">
                  Kids
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/category/ortho">
                  Ortho
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/category/best-offers">
                  Best Offers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );

  return (
    <nav className="navbar navbar-expand-lg  bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Trase
        </a>
        <div
          className="px-5 collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            {categories.map((item) => {
              console.log(item)
              return (
                <li className="nav-item" key={item.id}>
                  <a className="nav-link" href={`/categories/${item.name.split(" ").join("-").toLowerCase()}/${item.id}`}>
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
