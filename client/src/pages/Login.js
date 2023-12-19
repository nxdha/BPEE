import React from 'react'
import '../css/Login.css'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
  const handleSignup = ()=> {
    navigate('/signup');
  }

  const authenticate = ()=> {
    navigate("/mvt");
  }

  return (
    <div className="content-container">
    <div className="header">
      <b>METRO MANAGEMENT SYSTEM</b>
    </div>

    <form action="MVT.html" className="login-form">
      <input type="email" name="email" placeholder="Email Address" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit" onClick={authenticate}>Login</button>
    </form>

    <div className="signup-link">
      Don't have an account? <button onClick={handleSignup}>Sign Up</button>
    </div>
  </div>
  );
}
