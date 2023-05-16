import React from "react";
import Navbar from "../components/navbar";
import { useNavigate, useParams } from "react-router-dom";
import products from "../Products/Products.json";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const CheckoutPage = () => {
  const { paramitemid } = useParams();
  const navigate = useNavigate();

  const [data, setdata] = useState({
    firstname: "",
    address: "",
    phone: "",
  });
  const setdatafields = (e) => {
    const { value, name } = e.target;
    setdata(() => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const clickShippingButton = () => {
    if (!data.firstname || !data.address || !data.phone) {
      alert("Fill in all fields");
    } else {
      const getUser = localStorage.getItem("key");
      if (!getUser || getUser.length === 0) {
        alert("Please log in first");
        navigate("/Login");
      } else {
        {
          alert("Order placed successfully");
        }
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mt-4  row mx-3 justify-content-evenly">
        <div className="col-md-7">
          <p>Contact information</p>
          <p className="mt-4">
            Already have a account{" "}
            <span>
              <NavLink to="/Login">Login</NavLink>
            </span>
          </p>
          Shipping Address
          <br />
          <br />
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="First Name"
                  name="firstname"
                  onChange={setdatafields}
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">LastName</label>
                <input
                  type="Text"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                name="address"
                onChange={setdatafields}
              />
            </div>
            <div class="form-group">
              <label for="inputAddresss">Phone Number</label>
              <input
                type="number"
                class="form-control"
                id="inputAddresss"
                placeholder="1234 "
                name="phone"
                onChange={setdatafields}
              />
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>Pakistan</option>
                  <option>Australia</option>
                  <option>America</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="form-check"></div>
            </div>
            <button
              type="submit"
              class="btn btn-info text-white"
              onClick={clickShippingButton}
            >
              Continue to Shipping
            </button>
            <br />
            <br />
            <br />
          </form>
        </div>

        <div className="col-md-3">
          <div className="card">
            {products.map((product) => {
              if (product.id === paramitemid) {
                return (
                  <div key={product.id}>
                    <img
                      className="card-img-top"
                      src={product.images[0]}
                      alt={product.title}
                    />
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        Title: ${product.title}
                      </li>
                      <li className="list-group-item">
                        Price: ${product.price}
                      </li>
                      <li className="list-group-item">
                        Discount: {product.discountPercentage}%
                      </li>

                      <li className="list-group-item">
                        Brand: {product.brand}
                      </li>
                    </ul>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
