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
import { addvalue } from "../Store/Todoslice";

function HomePage() {
  const [addcart, setaddcart] = useState([]);
  const [stateshowcart, setstateshowcart] = useState(false);
  const dispatch=useDispatch()


  React.useEffect(() => {
    const storedCart = localStorage.getItem("idkey");
    if (storedCart) {
      setaddcart(JSON.parse(storedCart));
    }
  }, []);

  const navigate = useNavigate();

  const addCartItem = (id) => {
    setaddcart((prevCart) => {
      const updatedCart = [...prevCart, id];
      localStorage.setItem("idkey", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  const opencart=()=>
  {
    
    dispatch(addvalue(true))
  }

  return (
    <div className="container-fluid">
      <Navbar color="bg-info" />

      <div className="row bg-dark text-white py-3">
        <div className="col text-center">
          <h2>Welcome to our Shopping Store</h2>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={pic1}
                alt="First slide"
                height={400}
              />
              <Carousel.Caption>
                <h3>Welcome to our Store</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={pic2}
                alt="Second slide"
                height={400}
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
              />

              <Carousel.Caption>
                <h3>Quality Products</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      

      <div className="row mt-3">
        <div className="col text-center">
          <h3 className="text-white">Products</h3>
        </div>
      </div>
      <div></div>

      <div className="row">
      
        {products.map((myproducts) => (
          <div className="col-md-3" key={myproducts.id}>
            <div
              className="card mt-4 "
              style={{ height: "500px", border: "none" }}
            >
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
                  <h5 className="card-title text-danger">{myproducts.title}</h5>
                </NavLink>
                <p className="card-text">{myproducts.description}</p>
                <p className="card-text">Price: {myproducts.price}</p>
              </div>
              <button
                className="btn btn-info text-white "
                type="button"
                onClick={() => {
                  addCartItem(myproducts.id);
                  opencart();
                }}
                // style={{marginBottom:"10px"}}
              >
                Add to Cart
              </button>
             
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
