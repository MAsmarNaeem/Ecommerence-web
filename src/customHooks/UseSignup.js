import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Pages/Login";

function UseSignup() {
  const [signupInputs, setSignupInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dompush=useNavigate()
  const[data,setdata]=useState([])
  console.log("data is :",data);

  const getdata = (e) => {
    const { value, name } = e.target;

    setSignupInputs(() => {
      return {
        ...signupInputs,
        [name]: value,
     
      };
    });
  };

  const addDataButton = (e) => {
    e.preventDefault()
    const { name, email, password, confirmPassword } = signupInputs;
   

    if (name == "") {
      alert("name field is required");
    } else if (email == "") {
      alert("email field is required");
    } else if (password == "") {
      alert("password field is required");
    } else if (confirmPassword == "") {
      alert("confirm Password field is required");
    } else if (password != confirmPassword) {
      alert("Password and confirm Password should be same");
    } else if (!email.includes("@")) {
      alert(" Enter valid Email");
    } else if (password.length < 5) {
      alert("Enter Password strong or greater than 5 digits ");
    } else {
      alert("Enter data successfully");
      localStorage.setItem("key",JSON.stringify([...data,signupInputs]))
      dompush("/Login")
     

    }
  };

  return {
    getdata,
    signupInputs,
    setSignupInputs,
    addDataButton,
  };
}

export default UseSignup;
