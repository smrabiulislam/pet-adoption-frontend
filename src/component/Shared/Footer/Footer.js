import React from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import TopFooter from "./TopFooter";

class Footer extends React.Component {
  render() {
    return (
      <>
        <TopFooter></TopFooter>
        <Navbar bg="light">
          <Container>
            <Row>
              <Col className="text-center">
                <Nav>
                  <Nav.Link href="#">About</Nav.Link>
                  <Nav.Link href="#">Contact us</Nav.Link>
                  <Nav.Link href="#">Terms</Nav.Link>
                  <Nav.Link href="#">Privacy</Nav.Link>
                </Nav>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                &copy; {new Date().getFullYear()} Pet Adoption
              </Col>
            </Row>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Footer;
