import React from "react";
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const TopFooter = () => {
  return (
    <footer class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor, magna euismod bibendum consequat, velit velit bibendum
              justo, vel laoreet nulla lacus ac magna.
            </p>
          </div>
          <div class="col-md-3">
            <h5>Customer Service</h5>
            <ul class="list-unstyled">
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
          <div class="col-md-3">
            <h5>My Account</h5>
            <ul class="list-unstyled">
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
          <div class="col-md-3">
            <h5>Follow Us</h5>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li class="list-inline-item">
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
};

export default TopFooter;
