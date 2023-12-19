import React from 'react'
import '../css/Mvt.css'

export default function () {
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
          <img src={ticketImage} alt="ticket" />
        </div>
        <div className="header"></div>
        <a href="viewticket.html">VIEW TICKETS</a>
      </div>

      <div className="content">
        <div className="image-container">
          <img src={bookingImage} alt="booking" />
        </div>
        <div className="header"></div>
        <a href="ticketbook.html">BOOK TICKETS</a>
      </div>

      <div className="content">
        <div className="image-container">
          <img src={timingImage} alt="metrotime" />
        </div>
        <div className="header">
          <a href="timings.html">METRO TIMINGS</a>
        </div>
      </div>
    </div>
  </div>
  );
}
