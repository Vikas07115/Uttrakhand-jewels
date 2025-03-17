import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import "./App.css";

function CustomNavbar({ scrollToAbout, cartCount }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <strong>Uttrakhand's Jewels</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link href="#about" onClick={scrollToAbout}>About</Nav.Link>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="nav-icon">
              <FaShoppingCart size={20} />
              {cartCount > 0 && <Badge bg="danger" className="cart-badge">{cartCount}</Badge>}
            </Nav.Link>
            <Nav.Link as={Link} to="/profile" className="nav-icon">
              <FaUser size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
