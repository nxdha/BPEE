import React from 'react'
import '../css/Home.css'

export default function Home() {
  return (
    <div>
      <header>
        <div id="logo">
          <img src="./metro logo.jpg" alt="" /> KOCHI METRO
        </div>
        <nav id="nav">
          <a href="contact.html">Contact Us</a>
          <a href="metrosignup.html">
            <button>Login / Sign Up</button>
          </a>
        </nav>
      </header>
      <div className="intro-container">
        <h1>We've got your journey covered.</h1>
      </div>
    </div>
  )
}
