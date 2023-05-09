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

function HomePage() {
  return (
    <div className="container-fluid">
      <div className="container-fluid row mt-3 justify-content-between">
        <div className="col-md-3">
          <h1>Ecommerce</h1>
        </div>
        <div className="col-md-3 text-end">
          <AiOutlineUserAdd size="40px" />
          <BsCart size="40px" />
        </div>
      </div>
      <hr className="container " />
      <Navbar/>
      <div className="row text-center bg-dark text-white mx-3">
        <h2>Welcome to our Shopping Store</h2>
      </div>
      <div className="row text-center  text-success mx-3 mt-5">
        <h2>Our Items </h2>
      </div>
      {/* slider */}
      <div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src={pic1}
                height="400px"
                width="auto"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={pic2} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={pic3} alt="Third slide" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="row container-fluid mt-5 justify-content-center   " >
        {products.map((myproducts, index) => (
          <div className="col-md-3 text-center " key={myproducts.id}>
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
                <p> {myproducts.description}</p>
                <p>Price {myproducts.price}</p>
                <button
                className="mybtn"
                  type="button"
                  class="btn bg-info text-white "
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
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
     <Footer/>
    </div>
  );
}

export default HomePage;
