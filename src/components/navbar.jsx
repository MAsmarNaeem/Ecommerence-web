import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const navbar = (props) => {
  
  return (
    <div className="bg-info  row  justify-content-center" >
      <div className="col-md-3"></div>
     <div className="col-md-5">
     <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand href="/">
            <h3>
            <Link to="/" className="text-decoration-none text-white " >
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
              <Nav.Link >
                
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
                <Link className="text-decoration-none text-white " to="/signup" style={{marginRight:"490px"}}>
                  Signup
                </Link>
                </h3>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     </div>
     <div className="col-md-4"></div>
    </div>
  );
};

export default navbar;
