import { AiOutlineUserAdd } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import "../App.css";
import Navbar from "../components/navbar";
import products from "../Products/Products.json";
import pic1 from "../../src/Pages/images/pic1.avif";
import pic2 from "../../src/Pages/images/pic2.jpg";
import pic3 from "../../src/Pages/images/pic3.avif";
import React from "react";
import Footer from "../components/footer";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useDispatch } from "react-redux";
import { addvalue } from "../Store/CartSlice";
import { addToCart } from "../Store/Todoslice";

function HomePage() {
  const [addcart, setaddcart] = useState([]);
  const [stateshowcart, setstateshowcart] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const addCartItem = (id) => {
    dispatch(addToCart(id));
  };

  const opencart = () => {
    dispatch(addvalue(true));
  };

  return (
    <div className="container-fluid">
      <Navbar color="bg-info" />

      <div className="row  text-info py-3"></div>

      <div className="row mt-2">
        <div className="col">
          <Carousel>
            {/* Carousel items */}
          </Carousel>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col text-center">
          <h3 className="text-white text-bold">Products</h3>
        </div>
      </div>

      <div className="row">
        {products.map((myproducts) => (
          <div className="col-md-3" key={myproducts.id}>
            {/* Product card */}
            <div className="card mt-4 shadow" style={{ height: "500px", border: "none" }}>
              {/* Card content */}
              <img
                src={myproducts.thumbnail}
                alt={myproducts.title}
                className="card-img-top shadow"
                height="250px"
              />

              <div
                className="shadow rounded"
                style={{
                  height: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="card-body text-center mt-3">
                  <NavLink
                    to={`/Productdetail/${myproducts.id}`}
                    className="text-decoration-none text-danger"
                  >
                    <h5 className="card-title text-info">{myproducts.title}</h5>
                  </NavLink>
                  <p className="card-text">{myproducts.description}</p>
                  <p className="card-text">Price: {myproducts.price}</p>
                </div>
                <button
                  className="btn btn-info text-white pb-2 px-4 py-2"
                  style={{
                    marginLeft: "120px",
                    marginRight: "120px",
                    fontSize: "12px",
                    marginBottom: "30px",
                  }}
                  type="button"
                  onClick={() => {
                    addCartItem(myproducts.id);
                    opencart();
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Sidebar />

      <Footer />
    </div>
  );
}

export default HomePage;
