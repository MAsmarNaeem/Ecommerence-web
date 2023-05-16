import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import products from "../Products/Products.json";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar(props) {
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCounts, setItemCounts] = useState({}); // State for storing item counts

  useEffect(() => {
    const storedCart = localStorage.getItem("idkey");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    const countItems = () => {
      const counts = {};
      for (let i = 0; i < cartItems.length; i++) {
        const itemId = cartItems[i];
        counts[itemId] = counts[itemId] ? counts[itemId] + 1 : 1;
      }
      setItemCounts(counts);
    };

    countItems();
  }, [cartItems]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h6 className="mt-1 sidebar-title text-white" onClick={handleShow}>
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

                      <div className="card-body justify-content center container">
                        <h2 className="card-title text-center pt-2  text-info">
                          {product.title}({itemCounts[itemId]})
                        </h2>

                        <p className="card-text">{product.description}</p>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            Price: ${product.price}
                          </li>
                          <li className="list-group-item">
                            Discount: {product.discountPercentage}%
                          </li>

                          <li className="list-group-item">
                            Brand: {product.brand}
                          </li>

                          <Button variant="info" className=" checkout-button ">
                            <NavLink
                              to={`/CheckoutPage/${product.id}`}
                              className="text-decoration-none text-white"
                            >
                              Go to Checkout
                            </NavLink>
                          </Button>
                        </ul>
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
