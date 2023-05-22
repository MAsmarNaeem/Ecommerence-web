import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const navbar = (props) => {
  return (
    <div className="bg-info container-fluid ">
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand href="/">
            <h3>
            <Link to="/" className="text-decoration-none text-white " style={{marginLeft:"190px"}}>
              My Shopping App
            </Link>
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto">
              <Nav.Link>
                <h3>
                <Link className="text-decoration-none text-white " to="/">
                  Home
                </Link>
                </h3>
              </Nav.Link>
              <Nav.Link>
                <h3>
                <Link className="text-decoration-none text-white" to="/products">
                  Products
                </Link>
                </h3>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link style={{ marginTop: '-3px' }}>
                
                <Link className="text-decoration-none  text-white " >
                  <Sidebar myids={props.ids} />
                </Link>
              </Nav.Link>

              <Nav.Link>
                <h3>
                <Link className="text-decoration-none text-white" to="/login">
                  Login
                </Link>
                </h3>
              </Nav.Link>
              <Nav.Link>
                <h3>
                <Link className="text-decoration-none text-white " to="/signup" style={{marginRight:"290px"}}>
                  Signup
                </Link>
                </h3>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default navbar;
