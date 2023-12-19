import React from 'react'
import '../css/Viewticket.css'

export default function Viewticket() {
  return (
    <div className="body">
    <div className="content-container">
      <div className="header">
        <b>TICKET</b>
      </div>
      <div className="user-input-container">
        {/* Input fields and button */}
      </div>
    </div>

    <div className="content-container">
      <div className="header">
        <b style={{ marginLeft: '-20px' }}>METRO TICKET</b>
      </div>

      <div className="user-input-container">
        {/* Input fields and button */}
      </div>

      <div className="square-container metro-ticket-container">
        <a href="afterview.html">
          <img src="qr.png" alt="QR Code" />
        </a>
        <p style={{ margin: '5px 0' }}>Start Route: Aluva</p>
        <p style={{ margin: 0 }}>End Route: Kalamassery</p>
      </div>
    </div>
  </div>
  );
}
