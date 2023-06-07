import React from "react";
// import { AiOutlineUserAdd } from "react-icons/ai";
// import { BsCart } from "react-icons/bs";

import "../App.css";
import Navbar from "../components/navbar";
import products from "../Products/Products.json";
import { NavLink } from "react-router-dom";
import Footer from "../components/footer";
import "../App.css"

const Products = () => {
  // const handleShowDetails = (id) => {
  //  // history.push(`/Productdetail/${id}`);
  //   navigate('/Productdetail/${id}')
  // };

  return (
    <div className="" >
      <Navbar />
      <div className="row text-center  mx-3 mt-5">
        <h2>OUR PRODUCTS </h2>
      </div>

      <div className="row  mt-5 " >
        {products.map((myproducts, index) => (
          // <div className="col-md-3 text-center" key={myproducts.id}>
          //   <div className="card mt-5" style={{ height: "550px" }}>
          //     <div className="name">
          //       <img
          //         src={myproducts.thumbnail}
          //         style={{ height: "200px", width: "300px" }}
          //         alt="${item.title}"
          //       />
          //     </div>

          //     <div className="card-content">
          //     <NavLink
          //           to={`/Productdetail/${myproducts.id}`}
          //           className="text-decoration-none text-danger"
          //         >
          //            <h3
          //         className="text-danger mx-4 mt-2"
          //         style={{ height: "100px", width: "200px" }}
          //       >
          //         {myproducts.title}
          //       </h3>
          //         </NavLink>
               
          //     <p className="container">{myproducts.description}</p>
          //       <p>Price {myproducts.price}</p>
               
              
              
          //        <NavLink
          //           to={`/Productdetail/${myproducts.id}`}
          //           className="text-decoration-none text-white  btn bg-info "
          //         >
          //           Show Details
          //         </NavLink>
               
          //     </div>
          //   </div>
          // </div>
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
                <h5 className="card-title text-danger">{myproducts.title}</h5>
              </NavLink>
              <p className="card-text">{myproducts.description}</p>
              <p className="card-text">Price: {myproducts.price}</p>
             
            </div>
                    <NavLink
                    to={`/Productdetail/${myproducts.id}`}
                    className="text-decoration-none text-white  btn bg-info "
                  >
                    Show Details
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
