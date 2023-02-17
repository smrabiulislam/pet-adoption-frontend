import React from "react";
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";

class TopFooter extends React.Component {
  render() {
    return (
      <footer className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>About Us</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, magna euismod bibendum consequat, velit velit bibendum
                justo, vel laoreet nulla lacus ac magna.
              </p>
            </div>
            <div className="col-md-3">
              <h5>Customer Service</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>My Account</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Sign In</a>
                </li>
                <li>
                  <a href="#">My Orders</a>
                </li>
                <li>
                  <a href="#">Wish List</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Follow Us</h5>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <FaInstagramSquare />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default TopFooter;
