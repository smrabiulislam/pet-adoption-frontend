import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaEnvelope,
} from "react-icons/fa";

const TopHeader = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="text-light">
            Welcome, <span className="text-light">Default Name</span>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <div>
              <span className="text-light">
                <FaEnvelope className="me-2" />
                admin@petadoption.com
              </span>
            </div>
            <div>
              <a href="" className="text-light ">
                <FaFacebook />
              </a>
            </div>
            <div>
              <a href="" className="text-light ">
                <FaTwitter />
              </a>
            </div>
            <div>
              <a href="" className="text-light ">
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default TopHeader;
