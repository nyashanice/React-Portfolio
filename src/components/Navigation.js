import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Navigation() {
  return (
    <Navbar expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand href="#home">Nya Tyus</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} style={{ textDecoration: "none" }} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} style={{ textDecoration: "none" }} to="/about">
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              style={{ textDecoration: "none" }}
              to="/portfolio"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link to="/about">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
