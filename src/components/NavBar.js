import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.css";

function NavBar() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Pilar Luiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/projects" className="nav-link-left">
              Projects
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="mailto:pilarluiz13@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/pilarluiz/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
            </Nav.Link>
            <Nav.Link href="https://github.com/pilarluiz" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="fa-icon" />
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/pilarsprojectcar/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
            </Nav.Link>
            <Nav.Link
              href="https://www.tiktok.com/@pilarsprojectcar"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTiktok} className="fa-icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
