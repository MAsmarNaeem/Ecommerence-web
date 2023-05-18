import React, { useState } from "react";
import Navbar from "../components/navbar";
import products from "../Products/Products.json";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";

const Productdetail = () => {
  const { paramid } = useParams();
  const [addcart, setaddcart] = useState([]);


 
  React.useEffect(() => {
    const storedCart = localStorage.getItem("idkey");
    if (storedCart) {
      setaddcart(JSON.parse(storedCart));
    }
  }, []);

  const addCartItem = (id) => {
    alert("Item Added Successfully")
    setaddcart((prevCart) => {
      const updatedCart = [...prevCart, id];
      localStorage.setItem("idkey", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };



  return (
    <div>
      <Navbar ids={addcart} />
      <div className="row justify-content-evenly mt-4 mt-5 mb-5">
        <div className="col-md-5">
          <div className="card">
            {products.map((product) => {
              if (product.id == paramid) {
                return (
                  <div key={product.id}>
                    <img
                      className="card-img-top"
                      src={product.images[0]}
                      alt={product.title}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="col-md-5">
          <div className="card">
            {products.map((product) => {
              if (product.id == paramid) {
                return (
                  <div key={product.id}>
                    <div className="card-body">
                      <h2 className="card-title">{product.title}</h2>
                      <p className="card-text">{product.description}</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Price: ${product.price}
                        </li>
                        <li className="list-group-item">
                          Discount: {product.discountPercentage}%
                        </li>
                        <li className="list-group-item">
                          Rating: {product.rating}/5
                        </li>
                        <li className="list-group-item">
                          Brand: {product.brand}
                        </li>
                        <li className="list-group-item">
                          Stock: {product.stock} units
                        </li>
                        <button
                          className="mybtn"
                          type="button"
                          class="btn bg-info text-white "
                          data-toggle="button"
                          aria-pressed="false"
                          autocomplete="off"
                          onClick={() => addCartItem(product.id)}
                        >
                          Add to Cart
                        </button>
                      </ul>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Productdetail;
