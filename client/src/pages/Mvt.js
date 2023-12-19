import React from 'react'
import '../css/Mvt.css'
import { useNavigate } from 'react-router-dom'

export default function () {
  const navigate = useNavigate();
  const handleClick1 = ()=> {
    navigate("/view");
  }

  const handleClick2 = ()=> {
    navigate("/book");
  }

  const handleClick3 = ()=> {
    navigate("/timing");
  }
  
  return (
    <div className="App">
    <div className="header-container">
      <div className="header-text">
        <b>WELCOME JOHN DOE!</b>
      </div>
    </div>

    <div className="content-container">
      <div className="content">
        <div className="image-container">
          <img src='/images/ticket.png' alt="ticket" />
        </div>
        <div className="header"></div>
        <button onClick={handleClick1}>VIEW TICKETS</button>
      </div>

      <div className="content">
        <div className="image-container">
          <img src='/images/booking.png' alt="booking" />
        </div>
        <div className="header"></div>
        <button onClick={handleClick2}>BOOK TICKETS</button>
        
      </div>

      <div className="content">
        <div className="image-container">
          <img src='/images/timing.jpeg' alt="metrotime" />
        </div>
        <div className="header">
        <button onClick={handleClick3}>METRO TIMINGS</button>
        </div>
      </div>
    </div>
  </div>
  );
}
