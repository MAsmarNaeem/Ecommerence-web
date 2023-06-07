import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import products from "../Products/Products.json";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { addvalue } from "../Store/Todoslice";

function Sidebar(props) {
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCounts, setItemCounts] = useState({});
  const dispatch=useDispatch()

  useEffect(() => {
    const storedCart = localStorage.getItem("idkey");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);
  const addval=()=>
  {
    dispatch(addvalue(show))
    
  }

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

  const addItemCounter = (itemId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) + 1,
    }));
  };
  const delItemCounter = (itemId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) - 1,
    }));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const filteredItems = [...new Set(cartItems)];

  return (
    <>
    
    <>
      <h2  className="mt-1 sidebar-title text-white" onClick={handleShow}>
        Cart
      </h2>

      <Offcanvas placement="end" show={show} onHide={handleClose} backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {filteredItems.length > 0 ? (
            <div className="product-list">
              {filteredItems.map((itemId) => {
                const product = products.find((product) => product.id === itemId);

                if (product) {
                  return (
                    <div key={product.id} className="product-item">
                      <div className="product-image">
                        <img src={product.thumbnail} alt="" />
                      </div>

                      <div className="card-body justify-content center container">
                        <NavLink
                          to={`/Productdetail/${product.id}`}
                          className="text-decoration-none text-danger"
                        >
                          <h2 className="card-title text-center pt-2 text-info">
                            {product.title}
                          </h2>
                        </NavLink>
                        <div className="text-center">
                          <Button
                            variant="info"
                            className="text-white"
                            onClick={() => {
                              addItemCounter(itemId);
                            }}
                          >
                            +
                          </Button>
                          {itemCounts[itemId]}
                          <Button variant="info" className="text-white" onClick={() => {
                              delItemCounter(itemId);
                            }}>
                            -
                          </Button>
                        </div>
                       
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Price: ${product.price *itemCounts[itemId]  }</li>
                          <li className="list-group-item">Brand: {product.brand}</li>
                          <Button variant="info" className="checkout-button">
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
    </>
  );
}

export default Sidebar;
