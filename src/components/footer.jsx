import React from 'react'
import { Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import {  Container } from "react-bootstrap";

const footer = () => {
  return (
    <div> <footer className="bg-light py-4">
    <Container>
      <Row>
        <Col md={4} className="mb-4">
          <h5>About Us</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </Col>
        <Col md={4} className="mb-4">
          <h5>Customer Service</h5>
          <ul className="list-unstyled">
            <li>
              <RiCustomerService2Fill /> Contact Us
            </li>
            <li>
              <RiCustomerService2Fill /> FAQs
            </li>
            <li>
              <RiCustomerService2Fill /> Shipping &amp; Returns
            </li>
          </ul>
        </Col>
        <Col md={4} className="mb-4">
          <h5>Follow Us</h5>
          <ul className="list-unstyled">
            <li>
              <a href="https://www.facebook.com">
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FaTwitter /> Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FaInstagram /> Instagram
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    <div className="bg-dark text-center py-3 text-white">
      &copy; 2023 Your Company. All rights reserved.
    </div>
  </footer></div>
  )
}

export default footer