
import React from 'react'

import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const navbar = (props) => {
  return (
    <div className="bg-info"> <Navbar expand="lg">
    <Container >
      <Navbar.Brand href="/" ><Link to="/" className='text-decoration-none text-white'>My Shopping App </Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <Nav.Link ><Link  className='text-decoration-none text-white' to="/">Home </Link></Nav.Link>
          <Nav.Link  ><Link className='text-decoration-none text-white' to="/products">Products</Link></Nav.Link>
        </Nav>
        <Nav>
  
        <Nav.Link  style={{marginTop:"-3px"}}><Link className='text-decoration-none  text-white' ><Sidebar myids={props.ids} /></Link></Nav.Link>
           
          <Nav.Link><Link  className='text-decoration-none text-white' to="/login">Login</Link></Nav.Link>
          <Nav.Link  ><Link  className='text-decoration-none text-white' to="/signup">Signup</Link></Nav.Link>
        
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default navbar