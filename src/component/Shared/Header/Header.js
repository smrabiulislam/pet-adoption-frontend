import React, { useState, Component, useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaGoogle, FaFacebookF, FaFacebook, FaGithub } from "react-icons/fa";

import Modal from "react-bootstrap/Modal";



import TopHeader from "./TopHeader";
import { Link } from "react-router-dom";

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
    return (
      <>
        <TopHeader></TopHeader>
        <Navbar bg="light" expand="lg" sticky="top">
          <Container className="container-lg">
            <Navbar.Brand href='/'>Pet Adoption</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex w-100 justify-content-center">
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





                {/* sign in modal */}



                <Modal show={this.state.showModal} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group className="mt-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                    </Form>

                    <Link to='' variant="primary" onClick={this.props.handleForgotShow}>
                      Forgot Password
                    </Link>



                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                    <Button variant="primary">Login</Button>
                  </Modal.Footer>
                  <Modal.Footer className="social-login grid">
                    <Button variant="primary" className="facebook col">
                      <FaFacebookF />  Facebook
                    </Button>
                    <Button variant="primary" className="github col">
                      <FaGithub />  GitHub
                    </Button>
                    <Button variant="primary" className="google col">
                      <FaGoogle /> Google
                    </Button>
                  </Modal.Footer>
                </Modal>







                <Nav.Link>
                  <Button variant="outline-primary" onClick={this.handleSignUpShow}>Signup</Button>
                </Nav.Link>




                {/* Signup modal code */}



                <Modal show={this.state.show} onHide={this.handleSignUpClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" />
                      </Form.Group>

                      <Form.Group className="mt-2" controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" />
                      </Form.Group>

                      <Form.Group className="mt-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group className="mt-2" controlId="formBasicPhoto">
                        <Form.Label>Photo</Form.Label>
                        <Form.Control type="file" placeholder="Upload Your Photo" />
                      </Form.Group>

                      <Form.Group className="mt-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>

                      <Form.Group className="mt-2" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleSignUpClose}>
                      Close
                    </Button>
                    <Button variant="primary">Sign Up</Button>
                  </Modal.Footer>



                  <Modal.Footer className="social-login grid">
                    <Button variant="primary" className="facebook col">
                      <FaFacebookF />  Facebook
                    </Button>
                    <Button variant="primary" className="github col">
                      <FaGithub />  GitHub
                    </Button>
                    <Button variant="primary" className="google col">
                      <FaGoogle /> Google
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

export default Header;
