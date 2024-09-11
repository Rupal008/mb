import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import appifiz from "../../Assests/appifiz.png";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar variant="dark" expand="lg" className="p-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            className="rounded-3"
            src={appifiz}
            alt="Appifiz Logo"
            style={{
              width: "190px",
              height: "50px",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" style={{ textAlign: "center" }}>
            <Nav.Link
              as={Link}
              to="/"
              style={{ fontSize: "18px", color: "lightblue" }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              style={{ fontSize: "18px", marginLeft: "1rem" }}
            >
              ABOUT
            </Nav.Link>
            <NavDropdown
              title="PAGES"
              id="pages-dropdown"
              style={{ fontSize: "18px", marginLeft: "1rem" }}
            >
              <NavDropdown.Item as={Link} to="/firstpage">
                FEATURES
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/secondpage">
                TERMS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/secondpage">
                PRICING
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/secondpage">
                TESTIMONIALS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/secondpage">
                404 PAGE
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="BLOGS"
              id="pages-dropdown"
              style={{ fontSize: "18px", marginLeft: "1rem" }}
            >
              <NavDropdown.Item as={Link} to="/firstpage">
                BLOGS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/secondpage">
                SINGLE POST
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/contact"
              style={{ fontSize: "18px", marginLeft: "1rem" }}
            >
              CONTACT
            </Nav.Link>
          </Nav>
          <Nav className="ms-3">
            <Nav.Link
              as="button"
              className="rounded-3"
              style={{
                fontFamily: "Inter",
                fontWeight: "500",
                width: "120px",
                height: "39px",
                borderRadius: "50%",
                background: "linear-gradient(to right, #6dd5ed, lightpink)",
                color: "#fff",

                marginRight: "1rem",
                borderRight: "2rem",
              }}
            >
              DOWNLOAD
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
