import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import TopHeader from "./TopHeader";
// import NavDropdown from "react-bootstrap/NavDropdown";
class Header extends React.Component {
  render() {
    return (
      <>
        <TopHeader></TopHeader>
        <Navbar bg="light" expand="lg" sticky="top">
          <Container className="container-lg">
            <Navbar.Brand href="#">Pet Adoption</Navbar.Brand>
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
                <Nav.Link
                  href="#action1"
                  className="d-flex align-items-center justify-content-center ps-3 pe-3"
                >
                  Pet&#39;s
                </Nav.Link>
                <Nav.Link href="#action2">
                  <Button variant="outline-primary">Login</Button>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <Button variant="outline-primary">Signup</Button>
                </Nav.Link>
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
