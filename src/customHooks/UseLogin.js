import React, { useState } from 'react'

function UseLogin() {
  const [logindata,setlogindata]=useState(
    {
      email:"",
      password:""
    }
  )
  const[storeddata,setstoreddata]=useState([])

 
  
  const getdata=(e)=>
  {
    const{value,name}=e.target
   
    setlogindata(()=>{
      return{
        ...logindata,
        [name]:value
      }
    })
  }
  const submitbutton=(e)=>
  {
    e.preventDefault()
    let getUser=localStorage.getItem("key")
  

    const{email,password}=logindata
    if(email=="")
    {
      alert("email field is required")
    }
    else if(!email.includes("@"))
    {         
      alert("email is incorrect")
    }
    else if(password=="")
    {
      alert("password field is required")
    }
    else
       {
       if(getUser && getUser.length)
       {
        const userdata=JSON.parse(getUser)
             const userlogin=userdata.filter((ele,index)=>{
             return ele.email===email && ele.password===password
             }
             )
          if(userlogin.length==0)
          {
            alert("details incorrect")
          }
          else{
            alert("user login successfully")
          }
       }
       }

  }

  
  return (
    {
      getdata,
    submitbutton,
    }
  )
}

export default UseLogin
