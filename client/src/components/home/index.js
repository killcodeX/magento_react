import React from "react";
import "./home.css";

export default function Home() {
  return (
    <section className='home'>
      <div className='homebanner'
      style={{ background: `URL(https://demo.deity.io/static/media/hero-img-01.a6e05efb.jpg)`}}></div>
      home
    </section>
  );
}


//${process.env.PUBLIC_URL + '/media/homebanner.jpg'}