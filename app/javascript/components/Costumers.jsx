import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Footer from './Footer';
import Blink from  "react-blink-text";

const Costumers = () => {
return (
    <><Navbar bg="white" expand="lg">
        <Container>
            <Navbar.Brand href="/">TheFork</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/products">Products</Nav.Link>
                    <Nav.Link href="/costumers"><b>Costumers</b></Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="/user">Mark Otto</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <Footer /></>
);
};

export default Costumers;