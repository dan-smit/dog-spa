import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
      <Navbar.Brand as={Link} to="/" >Fur-tastic Grooming Spa</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/hours">Hours</Nav.Link>
          <Nav.Link as={Link} to="/about">About Us</Nav.Link> 
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;