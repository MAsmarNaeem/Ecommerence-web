import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import products from "../Products/Products.json";

const ProductList = () => {
  const [toggle, setToggle] = useState(false);
  const [productId, setProductId] = useState();

  const showProductDetails = (id) => {
    setToggle(!toggle);
    setProductId(id);
  };

  return (
    <div>
      <Navbar color="bg-info mt-1" text="text-white" />
      <div className="container my-5">
        <h1 className="text-center mb-4">Products List</h1>
        <div className="row">
          <div className="col-md-4">
            {products.map((product) => (
              <div className="card mb-4" key={product.id}>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <button
                    className="btn btn-primary"
                    onClick={() => showProductDetails(product.id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-8">
            {toggle && (
              <div className="card">
                {products.map((product) => {
                  if (product.id === productId) {
                    return (
                      <div key={product.id}>
                        <img
                          className="card-img-top"
                          src={product.images[0]}
                          alt={product.title}
                        />
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
                          </ul>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
