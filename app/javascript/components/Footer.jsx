import React from "react";
import {  Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <section className="jumbotron jumbotron-fluid text-center">
    <div className="container py-6">
    <footer className="bg-dark text-dark">
        
        <Row>
          <Col xs={12} md={4} align="right">
            <h5>About Us</h5>
            <p align="justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              suscipit, quam vitae convallis congue, justo nibh dictum magna,
              id placerat ipsum risus eu augue.
            </p>
          </Col>
          <Col xs={12} md={4} align="right">
            <h5>Contact Us</h5>
            <ul className="list-unstyled" align="right">
              <li>Email: info@example.com</li>
              <li>Phone: 555-555-5555</li>
            </ul>
          </Col>
          <Col xs={12} md={4} align="right">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Facebook</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Twitter</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
   
    </footer>
    </div>
    </section>
  );
};

export default Footer;
