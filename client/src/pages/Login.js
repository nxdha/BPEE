import React from 'react'
import '../css/Login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();
  const handleSignup = ()=> {
    navigate('/signup');
  }

  const authenticate = (event)=> {
    event.preventDefault();
    const data = {email: email, password: password};
    axios.put("http://localhost:3001/auth/login",data).then((response)=> {
      console.log(response.data);
      if(response.data.error) {
        alert("invalid credentials");
      }
      else {
        localStorage.setItem("name",response.data.name)
        navigate("/mvt");
      }
    });
  }

  return (
    <div className="content-container">
    <div className="header">
      <b>METRO MANAGEMENT SYSTEM</b>
    </div>

    <form action="MVT.html" className="login-form">
      <input type="email" onChange = {(e)=> {setEmail(e.target.value)}} name="email" placeholder="Email Address" />
      <input type="password" onChange = {(e)=> {setPassword(e.target.value)}} name="password" placeholder="Password" />
      <button type="submit" onClick={authenticate}>Login</button>
    </form>

    <div className="signup-link">
      Don't have an account? <button onClick={handleSignup}>Sign Up</button>
    </div>
  </div>
  );
}
