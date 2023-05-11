import React, { useState } from "react";
import HomePage from "../Pages/HomePage";
import { useNavigate } from "react-router-dom";

function UseLogin() {
  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [storeddata, setstoreddata] = useState([]);

  const getdata = (e) => {
    const { value, name } = e.target;

    setlogindata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitbutton = (e) => {
    e.preventDefault();
    let getUser = localStorage.getItem("key");

    const { email, password } = logindata;
    if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Email is incorrect");
    } else if (password === "") {
      alert("Password field is required");
    } else {
      if (getUser && getUser.length) {
        const userdata = JSON.parse(getUser);
        const userlogin = userdata.filter((ele, index) => {
          return ele.email === email && ele.password === password;
        });
        if (userlogin.length === 0) {
          alert("Incorrect details");
        } else {
          alert("User logged in successfully");
          navigate("/");
        }
      }
    }
  };

  return {
    getdata,
    submitbutton,
  };
}

export default UseLogin;
