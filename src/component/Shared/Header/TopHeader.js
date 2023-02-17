import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

class TopHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    const userEmail = localStorage.getItem("userEmail");
    const user = JSON.parse(userEmail);
    const url = `http://localhost:5000/user?email=${user}`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((user) => this.setState({ user }));
  }
  render() {
    const { user } = this.state;

    return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="text-light">
              Welcome,{" "}
              <Link to="/profile" className="text-light">
                {user?.firstName}
              </Link>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <div>
                <span className="text-light">
                  <FaEnvelope className="me-2" />
                  {user?.email}
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
  }
}

export default TopHeader;
