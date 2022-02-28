import React from "react";
import "./footer.css";
import {
  CgFacebook,
  CgTwitter,
  CgInstagram,
  CgMonday,
  CgOrganisation,
  CgMail,
} from "react-icons/cg";

export default function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2 className="logo-text">Trase</h2>
              <p className="brand-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="social-media">
                <a className="social-icons" href="#">
                  <CgFacebook />
                </a>
                <a className="social-icons" href="#">
                  <CgTwitter />
                </a>
                <a className="social-icons" href="#">
                  <CgInstagram />
                </a>
                <a className="social-icons" href="#">
                  <CgMonday />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="footer-heading">Information</h4>
              <ul className="footer-list">
                <li>About us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
                <li>Return Policy</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className="footer-heading">My Account</h4>
              <ul className="footer-list">
                <li>My Account</li>
                <li>Wishlist</li>
                <li>Newsletter</li>
                <li>Track orders</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className="footer-heading">Have a Questions?</h4>
              <ul className="footer-list">
                <li>
                  <span className="contact-icon">
                    <CgOrganisation />
                  </span>
                  <span>Gururam, Harayana, 10022</span>
                </li>
                <li>
                  <span className="contact-icon">
                    <CgMail />
                  </span>
                  <span>trase@support.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-start">
              <p className="copyright">
                Copyright © 2022 Trase. All Right Reserved
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <img
                src={process.env.PUBLIC_URL + "/media/payment-icon.png"}
                alt="payment"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
