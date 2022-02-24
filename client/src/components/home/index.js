import React from "react";
import HomeHeader from "../header/homeHeader";
import Products from "../products";
import "./home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="homebanner-container">
        <div
          className="homebanner"
          style={{
            background: `URL(${
              process.env.PUBLIC_URL + "/media/homebanner.jpg"
            })`,
          }}
        ></div>
        <h1>
          Welcome to <br /> the Trase store.
        </h1>
      </div>
      <HomeHeader />
      <main>
      <div className='container mt-4 mb-4'>
          <div className='products'>
            <h2 className='home-headers'>Popular Items</h2>
            <p className='home-subheaders'>Shop our most popular products</p>
            <Products/>
          </div>
      </div>
      </main>
    </section>
  );
}

//${process.env.PUBLIC_URL + '/media/homebanner.jpg'}
