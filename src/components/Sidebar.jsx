import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import products from "../Products/Products.json";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { addvalue } from "../Store/Todoslice";

function Sidebar(props) {
  const store = useSelector((store) => store);

  const [show, setShow] = useState(store.myTodo.Todo.todos);
  const [cartItems, setCartItems] = useState([]);
  const [itemCounts, setItemCounts] = useState({});
  const dispatch = useDispatch();
  const demo = () => {
    console.log("store is :", store.myTodo.Todo.todos);
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("idkey");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);
  const addval = () => {
    if (store.myTodo.Todo.todos) {
      dispatch(addvalue(show));
    } else {
      dispatch(addvalue(!show));
    }
  };

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

  const handleClose = () => {
    setShow(false);
    dispatch(addvalue(false));
  };
  const handleShow = () => dispatch(addvalue(true));

  const filteredItems = [...new Set(cartItems)];

  return (
    <>
      <>
        <p className=" sidebar-title text-white" style={{fontSize:"25px"}} onClick={handleShow}>
          Cart
        </p>

        <Offcanvas
          placement="end"
          show={store.myTodo.Todo.todos}
          onHide={handleClose}
          backdrop={false}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {filteredItems.length > 0 ? (
              <div className="product-list">
                {filteredItems.map((itemId) => {
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
                            <Button
                              variant="info"
                              className="text-white"
                              onClick={() => {
                                delItemCounter(itemId);
                                demo();
                              }}
                            >
                              -
                            </Button>
                          </div>

                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                              Price: ${product.price * itemCounts[itemId]}
                            </li>
                            <li className="list-group-item">
                              Brand: {product.brand}
                            </li>
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
