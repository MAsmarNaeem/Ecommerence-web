import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';


import { Navbar, Nav, Container } from 'react-bootstrap';

import  products  from '../Products/Products.json';


function HomePage() {
  return (
    <div className='container-fluid'>
      <div className='container-fluid row mt-3 justify-content-between'> 
        <div className='col-md-3'>
          <h1>Ecommerce</h1>
        </div>
        <div className='col-md-3 text-end'>
          <AiOutlineUserAdd size='40px' />
          <BsCart size='40px' />
        </div>
      </div>
      <hr className='container '/>
      <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="/">My Shopping App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='row text-center bg-dark text-white mx-3'>
        <h2>Welcome to our Shopping Store</h2>
       
    </div>
    <div className='row text-center  text-success mx-3 mt-5'>
        <h2>Out Items </h2>
       
    </div>
  

<div className='row container mt-5 justify-content-center mx-4 '>
  {products.map((myproducts, index) => (
    <div className='col-md-3 text-center ' key={myproducts.id}>
      <div className="card mt-5" style={{height:"550px"}}>
        <div className='name' >
        <img src={myproducts.thumbnail} style={{height:"200px",width:"250px"}} alt="${item.title}"/>
        </div>
       
        <div className="card-content">
          <h3 className='text-danger mx-4' style={{height:"100px",width:"200px"}}>{myproducts.title}</h3>
          <p> {myproducts.description}</p>
          <p>Price  {myproducts.price}</p>
         
        </div>
      </div>
      
    </div>
  ))}
</div>

    </div>
  );
}

export default HomePage