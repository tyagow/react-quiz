import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, Container, Row, Col } from "reactstrap";

export default () => {
  return (
    <Container fluid>
      <Row>
        <Navbar
          color="light"
          expand="md"
          className="float-left"
          style={{ width: "100%" }}
        >
          <Col sm={12}>
            <Nav className="p-3" navbar>
              <NavItem className="ml-4 mr-4 text-white">
                <Link to="/">Questions list</Link>
              </NavItem>|
              <NavItem className="ml-4">
                <Link to="/question/new">New Question</Link>
              </NavItem>
            </Nav>
          </Col>
        </Navbar>
      </Row>
    </Container>
  );
};
