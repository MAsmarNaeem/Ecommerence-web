import React from "react";
// import { AiOutlineUserAdd } from "react-icons/ai";
// import { BsCart } from "react-icons/bs";

import "../App.css";
import Navbar from "../components/navbar";
import products from "../Products/Products.json";
import { NavLink } from "react-router-dom";
import Footer from "../components/footer";
import "../App.css"
import { useDispatch } from "react-redux";
import { addvalue } from "../Store/CartSlice";
import { addToCart } from "../Store/Todoslice";

const Products = () => {
  // const handleShowDetails = (id) => {
  //  // history.push(`/Productdetail/${id}`);
  //   navigate('/Productdetail/${id}')
  // };
  const dispatch=useDispatch()
  const openCartAndAddItem = (id) => {
    dispatch(addvalue(true));
    dispatch(addToCart(id));
  };


  return (
    <div className="" >
      <Navbar />
      <div className="row text-center text-info mx-3 mt-5">
        <h2>OUR PRODUCTS </h2>
      </div>

      <div className="row  mt-5 " >
        {products.map((myproducts, index) => (
         
          <div className="col-md-3" key={myproducts.id}>
          <div className="card mt-4 " style={{height:"500px",border:"none"}}>
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
                    // to={`/Productdetail/${myproducts.id}`}
                     style={{marginLeft:"90px",marginRight:"90px"}}
                     className="text-decoration-none text-white  btn bg-info mb-3 p-2 px-2"
                    onClick={()=>{openCartAndAddItem(myproducts.id)}}
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
