import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import products from "../Products/Products.json";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; // Import the custom CSS file

function Sidebar(props) {
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("idkey");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, [cartItems]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h6 className="mt-1 sidebar-title" onClick={handleShow}>
        Cart
      </h6>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length > 0 ? (
            <div className="product-list">
              {cartItems.map((itemId) => {
                const product = products.find(
                  (product) => product.id === itemId
                );
                if (product) {
                  return (
                    <div key={product.id} className="product-item">
                      <div className="product-image">
                        <img src={product.thumbnail} alt="" />
                      </div>
                      <div className="product-details">
                        <h5>{product.title}</h5> 
                       
                        <Button
                          variant="success"
                          className=" checkout-button"
                        >
                          <NavLink
                            to={`/CheckoutPage/${product.id}`}
                            className="text-decoration-none text-white"
                          >
                            Add to Checkout
                          </NavLink>
                        </Button>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          ) : (
            <p>No items in the cart</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
