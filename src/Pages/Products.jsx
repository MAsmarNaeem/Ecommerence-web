import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsCart } from "react-icons/bs";

import "../App.css";
import Navbar from "../components/navbar";
import products from "../Products/Products.json";
import { NavLink } from "react-router-dom";
import Footer from "../components/footer";

const Products = () => {
  // const handleShowDetails = (id) => {
  //  // history.push(`/Productdetail/${id}`);
  //   navigate('/Productdetail/${id}')
  // };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row text-center text-success mx-3 mt-5">
        <h2>OUR PRODUCTS </h2>
      </div>

      <div className="row container-fluid mt-5 justify-content-center">
        {products.map((myproducts, index) => (
          <div className="col-md-3 text-center" key={myproducts.id}>
            <div className="card mt-5" style={{ height: "550px" }}>
              <div className="name">
                <img
                  src={myproducts.thumbnail}
                  style={{ height: "200px", width: "300px" }}
                  alt="${item.title}"
                />
              </div>

              <div className="card-content">
                <h3
                  className="text-danger mx-4"
                  style={{ height: "100px", width: "200px" }}
                >
                  {myproducts.title}
                </h3>
                <p>{myproducts.description}</p>
                <p>Price {myproducts.price}</p>
                <button
                  className="mybtn"
                  type="button"
                  // onClick={() => handleShowDetails(myproducts.id)}
                >
                  {/* <NavLink to="/Productdetail">Show Details...</NavLink> */}
                  <NavLink
                    to={`/Productdetail/${myproducts.id}`}
                    className="text-decoration-none text-danger"
                  >
                    Show Details...
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Products;
