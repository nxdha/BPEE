import React from 'react'
import '../css/Ticketbook.css'
export default function Ticketbook() {
  return (
    <div className="content-container">
    <div className="header">
      <b>TICKET BOOKING</b>
    </div>

    <div className="user-input-container">
      <input type="text" list="startRoutes" name="startRoute" placeholder="Start route" />
      <datalist id="startRoutes">
        {/* Your options for start routes */}
      </datalist>

      <input type="text" list="endRoutes" name="endRoute" placeholder="End Route" />
      <datalist id="endRoutes">
        {/* Your options for end routes */}
      </datalist>

      <input type="number" name="ticketQuantity" placeholder="Number of Tickets" min="1" max="30" />
      <a href="payment.html">
        <button type="submit">Generate Ticket</button>
      </a>
    </div>

    <div className="square-container">
      <img src="metropic.jpeg" alt="Metro Pic" />
    </div>
  </div>
  );
}
