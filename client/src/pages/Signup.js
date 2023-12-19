import React from 'react'

export default function Signup() {
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
        <button type="submit">Sign Up</button>
      </form>

      <div className="signup-link">
        Already have an account?{' '}
        <a href="metrologin.html">
          <b>
            <u>Login</u>
          </b>
        </a>
      </div>
    </div>
  );
};
