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

function HomePage() {
  const [addcart, setaddcart] = useState([]);


 
  React.useEffect(() => {
    const storedCart = localStorage.getItem("idkey");
    if (storedCart) {
      setaddcart(JSON.parse(storedCart));
    }
  }, []);

  const addCartItem = (id) => {
    alert("add item into cart successfully")
    setaddcart((prevCart) => {
      const updatedCart = [...prevCart, id];
      localStorage.setItem("idkey", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  return (
    <div className="container-fluid">
      <div className="row mt-3 justify-content-between">
        <div className="col-md-3">
          <h1>Ecommerce</h1>
        </div>
        <div className="col-md-3 text-end">
          <AiOutlineUserAdd size="40px" />
          <BsCart size="40px" />
        </div>
      </div>
      <hr className="container" />
      <Navbar />
      <div className="row text-center bg-dark text-white mx-3 py-3">
        <div className="col">
          <h2>Welcome to our Shopping Store</h2>
        </div>
      </div>
      <div className="row text-center text-success mx-3 mt-5">
        <div className="col">
          <h2>Our Items</h2>
        </div>
      </div>
      {/* slider */}
      <div className="row">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={pic1}
                height="400px"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={pic2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={pic3} alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="row container-fluid mt-5 justify-content-center">
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

              <div className="card-content">
                <h3 className="text-danger my-4">{myproducts.title}</h3>
                <p>{myproducts.description}</p>
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
