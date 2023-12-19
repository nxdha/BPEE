import React from 'react'
import '../css/Signup.css'
import { useNavigate } from 'react-router-dom';
export default function Signup() {
  const navigate = useNavigate();
  const handleLogin = ()=> {
    navigate("/login");
  }

  const register = ()=> {
    
  }

  return (
    <div className="content-container">
    <div className="header">
      <b>METRO MANAGEMENT SYSTEM</b>
    </div>
    <form action="MVT.html" className="login-form">
        <input type="text" name="fullName" placeholder="Full Name" />
        <input type="number" name="age" placeholder="Age" />
        <input type="email" name="email" placeholder="Email Address" />
        <input type="password" name="password" placeholder="Password" />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <input type="tel" name="phoneNo" placeholder="Phone No." />
        <button type="submit" onClick={register}>Sign Up</button>
      </form>

      <div className="signup-link">
        Already have an account?{' '}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};
