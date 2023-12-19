import React from 'react'
import '../css/Home.css'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const handleLogin = ()=> {
    navigate("/login");
  }
  const handleContact = ()=> {
    navigate("/contact");
  }
  return (
    <div>
      <header>
        <div id="logo">
          <img src="./metro logo.jpg" alt="" /> KOCHI METRO
        </div>
        <nav id="nav">
          <button onClick={handleContact}>Contact Us</button>
            <button onClick={handleLogin}>Login / Sign Up</button>
        </nav>
      </header>
      <div className="intro-container">
        <h1>We've got your journey covered.</h1>
      </div>
    </div>
  )
}
