import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addvalue } from "../Store/CartSlice";
import { addToCart } from "../Store/AddCartSlice";
import Navbar from "../components/navbar";
import products from "../Products/Products.json";
import Footer from "../components/footer";
import "../App.css";

const Products = () => {
  const dispatch = useDispatch();

  const openCartAndAddItem = (id) => {
    dispatch(addvalue(true));
    dispatch(addToCart(id));
  };

  return (
    <div className="">
      <Navbar />
      <div className="row text-center text-info mx-3 mt-5">
        <h2>OUR PRODUCTS</h2>
      </div>

      <div className="row mt-5">
        {products.map((myproducts) => (
          <div className="col-md-3" key={myproducts.id}>
            <div className="card mt-4 shadow" style={{ height: "500px", border: "none" }}>
              <img
                src={myproducts.thumbnail}
                alt={myproducts.title}
                className="card-img-top"
                height="250px"
              />
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
              <NavLink
               className="btn btn-info text-white pb-2 px-4 py-2"
               style={{
                 marginLeft: "30%",
                 marginRight: "5%",
                 marginBottom: "30px",
                 width: "40%",
                 maxWidth: "300px"
               }}
                onClick={() => {
                  openCartAndAddItem(myproducts.id);
                }}
              >
                Add to Cart
              </NavLink>
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
