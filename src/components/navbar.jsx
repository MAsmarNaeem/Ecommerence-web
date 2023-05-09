
import React from 'react'

import { Navbar, Nav, Container } from "react-bootstrap";

const navbar = (props) => {
  return (
    <div className={props.color}> <Navbar expand="lg">
    <Container >
      <Navbar.Brand href="/" className={props.text}>My Shopping App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <Nav.Link href="/" className={props.text}>Home</Nav.Link>
          <Nav.Link href="/productList" className={props.text}>Products</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/cart" className={props.text}>Cart</Nav.Link>
          <Nav.Link href="/login" className={props.text}>Login</Nav.Link>
          <Nav.Link href="/signup" className={props.text}>Signup</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default navbar