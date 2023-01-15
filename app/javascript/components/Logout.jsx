import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";


const Logout = () => {
  return (
    <Navbar bg="white" expand="lg">
    <Container>
      <Navbar.Brand href="/">TheFork</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/costumers">Costumers</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          
          {/* 
          <NavDropdown title="User actions" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Append a restaurent</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Edit a restaurent 
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Update a restaurent</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Delete
            </NavDropdown.Item>
          </NavDropdown>
          */}

        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <a href="/login">Sign in</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
  );
};

export default Logout; 
