import React from 'react'
import '../css/Signup.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios"

export default function Signup() {
  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [phone,setPhone] = useState("");

  const navigate = useNavigate();
  const handleLogin = ()=> {
    navigate("/login");
  }

  const register = (event)=> {
    event.preventDefault();
    const data = {
      name : name,
      age: age,
      email: email,
      password: password,
      phone: phone
    }
    console.log(data);

    axios.put("http://localhost:3001/auth/register",data).then((response)=> {
      console.log(response.data);
    });

    navigate("/login")
  }

  return (
    <div className="content-container">
    <div className="header">
      <b>METRO MANAGEMENT SYSTEM</b>
    </div>
    <form action="MVT.html" className="login-form">
        <input type="text" onChange = {(e)=> {setName(e.target.value)}} name="name" placeholder="Full Name" />
        <input type="number" onChange = {(e)=> {setAge(e.target.value)}} name="age" placeholder="Age" />
        <input type="email" onChange = {(e)=> {setEmail(e.target.value)}} name="email" placeholder="Email Address" />
        <input type="password" onChange = {(e)=> {setPassword(e.target.value)}} name="password" placeholder="Password" />
        <input type="tel" onChange = {(e)=> {setPhone(e.target.value)}} name="phone" placeholder="Phone No." />
        <button onClick={register}>Sign Up</button>
      </form>

      <div className="signup-link">
        Already have an account?{' '}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};
