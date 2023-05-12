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
import Sidebar from "../components/Sidebar";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

function HomePage() {
  const [addcart, setaddcart] = useState([]);

  React.useEffect(() => {
    const storedCart = localStorage.getItem("idkey");
    if (storedCart) {
      setaddcart(JSON.parse(storedCart));
    }
  }, []);

  const addCartItem = (id) => {
    alert("Item added Successfully");
    setaddcart((prevCart) => {
      const updatedCart = [...prevCart, id];
      localStorage.setItem("idkey", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  return (
    <div className="container-fluid">
      {/* <div className="row mt-3 justify-content-between">
        <div className="col-md-3">
          <h1>Ecommerce</h1>
        </div>
        <div className="col-md-3 text-end">
          <Link to="/signup">
            {" "}
            <AiOutlineUserAdd size="40px" />
          </Link>

          <Link to="/Products">
            {" "}
            <BsCart size="40px" />{" "}
          </Link>
        </div>
      </div> */}
      {/* <hr className="container" /> */}
      <Navbar color="bg-info "/>
      {/* <div className="row text-center bg-dark text-white mx-3 py-3">
        <div className="col">
          <h2>Welcome to our Shopping Store</h2>
        </div>
      </div> */}

      {/* slider */}
      <div className="row pt-3 ">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pic1}
              alt="First slide"
              height={400}
              width={100}
            />
            <Carousel.Caption>
              <h3>Welcome to our Store</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pic2}
              alt="Second slide"
              height={400}
              width={100}
            />

            <Carousel.Caption>
              <h3 className="text-info">Best Services Available</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pic3}
              alt="Third slide"
              height={400}
              width={100}
            />

            <Carousel.Caption>
              <h3>Quality Products</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="row mt-5 ">
        {products.map((myproducts, index) => (
          <div className="col-md-3 text-center" key={myproducts.id}>
            <div className="card mt-5" style={{ height: "550px" }}>
              <div className="name">
                <img
                  src={myproducts.thumbnail}
                  style={{ height: "200px", width: "300px" }}
                  alt={myproducts.title}
                />
              </div>

              <div className="card-content ">
              <NavLink
                    to={`/Productdetail/${myproducts.id}`}
                    className="text-decoration-none text-danger"
                  >
                     <h3 className="text-danger my-4 text-right">{myproducts.title}</h3>
                  </NavLink>
               
                <p className="container">{myproducts.description}</p>
                <p>Price: {myproducts.price}</p>
                <button
                  className="mybtn btn bg-info text-white"
                  type="button"
                  data-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                  onClick={() => addCartItem(myproducts.id)}
                >
                  Add to Cart
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
}

export default HomePage;
