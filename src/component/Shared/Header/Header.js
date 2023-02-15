import React, { useState, Component, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaGoogle, FaFacebookF, FaFacebook, FaGithub } from "react-icons/fa";

import Modal from "react-bootstrap/Modal";

import TopHeader from "./TopHeader";
import { Link } from "react-router-dom";
import LoginForm from "../../Signin/Signin";
import Signup from "../../Signup/Signup";
import AuthContexts from "../../context/authContext";

// import NavDropdown from "react-bootstrap/NavDropdown";
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({
      showModal: false,
    });
  }

  handleShow() {
    this.setState({
      showModal: true,
    });
  }

  // signup code

  state = {
    show: false,
  };

  handleSignUpShow = () => {
    this.setState({ show: true });
  };

  handleSignUpClose = () => {
    this.setState({ show: false });
  };
  render() {
    const signUpItem = localStorage.getItem("signUp");
    const logInItem = localStorage.getItem("logIn");
    const parseItem = JSON.parse(signUpItem);
    const parseItemLogin = JSON.parse(logInItem);
    const { logOut, sign } = this.context;
    const handleLogOut = () => {
      logOut();
    };
    return (
      <>
        <TopHeader></TopHeader>
        <Navbar bg="light" expand="lg" sticky="top">
          <Container className="container-lg">
            <Navbar.Brand href="/">Pet Adoption</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form
                className="d-flex w-100 justify-content-center"
                style={{ maxWidth: "75%" }}
              >
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 w-75"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link>
                  <Button variant="outline-primary" onClick={this.handleShow}>
                    Login
                  </Button>
                </Nav.Link>
                <>
                  <Nav.Link>
                    <Button
                      variant="outline-primary"
                      onClick={handleLogOut}
                      className={signUpItem || logInItem ? "d-block" : "d-none"}
                    >
                      Log Out
                    </Button>
                  </Nav.Link>
                </>

                {/* sign in modal */}

                <Modal show={this.state.showModal} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <LoginForm></LoginForm>

                    <Link
                      to=""
                      variant="primary"
                      onClick={this.props.handleForgotShow}
                    >
                      Forgot Password
                    </Link>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                  <Modal.Footer className="social-login grid">
                    <Button variant="primary" className="facebook col">
                      <FaFacebookF /> Facebook
                    </Button>
                    <Button variant="primary" className="github col">
                      <FaGithub /> GitHub
                    </Button>
                    <Button variant="primary" className="google col">
                      <FaGoogle /> Google
                    </Button>
                  </Modal.Footer>
                </Modal>

                <Nav.Link>
                  <Button
                    variant="outline-primary"
                    onClick={this.handleSignUpShow}
                  >
                    Signup
                  </Button>
                </Nav.Link>

                {/* Signup modal code */}

                <Modal show={this.state.show} onHide={this.handleSignUpClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Signup close={this.handleSignUpClose}></Signup>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={this.handleSignUpClose}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>

                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

Header.contextType = AuthContexts;

export default Header;
