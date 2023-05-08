import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import UseLogin from '../customHooks/UseLogin';


function Login() {
  const {getdata,submitbutton}=UseLogin()

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} className="mt-4">
          <h2 className="text-center mb-4">Log In</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required onChange={getdata} name="email"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required  onChange={getdata} name="password"/>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3" onClick={submitbutton}>
              Log In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
