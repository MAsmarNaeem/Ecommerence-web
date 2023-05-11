import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import products from "../Products/Products.json";
import { NavLink } from "react-router-dom";

function Sidebar(props) {
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
   console.log("use");
    const storedCart = localStorage.getItem("idkey");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h6 className="mt-1" variant="primary" onClick={handleShow}>
        Cart
      </h6>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length > 0 ? (
            <ol>
              {cartItems.map((itemId) => {
                const product = products.find(
                  (product) => product.id === itemId
                );
                if (product) {
                  return (
                    <li key={product.id}>
                      <div>
                        Product: {product.title}
                        <img src={product.thumbnail} alt="" height="170px" />
                        <br />
                        <br/>
                        <button type="button" class="btn btn-success">
                        {console.log("id",product.id)} 
                       
                           <NavLink
                            to={`/CheckoutPage/${product.id}`}
                            className="text-decoration-none text-white"
                          >  Add Checkout</NavLink>
                        
                        </button>
                        <br />
                    
                      </div>
                       
                    </li>
                  );
                } else {
                  return null;
                }
              })}
            </ol>
          ) : (
            <p>No items in the cart</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
