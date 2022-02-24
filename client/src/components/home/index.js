import React from "react";
import "./home.css";

export default function Home() {
  return (
    <section className='home'>
      <div className='homebanner'
      style={{ background: `URL(${process.env.PUBLIC_URL + '/media/homebanner.jpg'})`}}></div>
      home
    </section>
  );
}


//${process.env.PUBLIC_URL + '/media/homebanner.jpg'}