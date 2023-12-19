import React from 'react'
import '../css/Afterview.css'
export default function Afterview() {
  return (
    <div className="content-container">
    <div className="header">
      <b>METRO VIRTUAL TICKETS</b>
    </div>
    <img src="qr.png" alt="QR Code" className="qr-code" />
    <div className="info-container">
      <div>Name of Ticket Holder: John Doe</div>
      <div>Start Route: Aluva</div>
      <div>End Route: Kalamaserry</div>
      <div>Ticket Fare: ₹30</div>
    </div>
    <div className="no-of-tickets">No. of Tickets: 1/3</div>
    <div className="cancel-container" onClick={cancelTicket}>
      <b>CANCEL TICKET</b>
    </div>
  </div>
  );
}
