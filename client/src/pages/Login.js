import React from 'react'
import '../css/Login.css'

export default function Login() {
  return (
    <div className="content-container">
    <div className="header">
      <b>METRO MANAGEMENT SYSTEM</b>
    </div>

    <form action="MVT.html" className="login-form">
      <input type="email" name="email" placeholder="Email Address" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>

    <div className="signup-link">
      Don't have an account? <a href="metrosignup.html"><b><u>Sign up</u></b></a>
    </div>
  </div>
  );
}
