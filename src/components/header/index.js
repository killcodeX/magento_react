import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg  bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Trase
        </a>
        <div className="px-5 collapse navbar-collapse" id="navbarSupportedContent">
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
}
