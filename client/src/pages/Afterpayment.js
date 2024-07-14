import React, { useState } from 'react';
import '../css/Afterpayment.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Afterpayment() {
  const [start,setStart] = useState("");
  const [end,setEnd] = useState("");
  const [fare,setFare] = useState("");
  const [name,setName] = useState("");
  const [num,setNum] = useState("");
  const navigate = useNavigate();
  useEffect(()=> {
    axios.put("http://localhost:3001/auth/getdata",{name: localStorage.getItem("name")}).then((response)=> {
      console.log(response.data);
    setStart(response.data.ticket.startroute);
    setEnd(response.data.ticket.destination)
    setName(response.data.name);
    setFare(response.data.ticket.fare)
    setNum(response.data.ticket.numberOfTickets)
  })
  },[])

  function backToMainMenu() {
    navigate("/mvt")
  }

  return (
    <>
    <div className="content-container">
      <div className="header">
        <b>PAYMENT SUCCESSFUL</b>
      </div>
      <img src="/images/qr.png" alt="QR Code" className="qr-code" />
      <div className="info-container">
        <div>Name of Ticket Holder: {name}</div>
        <div>Start Route: {start}</div>
        <div>End Route: {end}</div>
        <div>Ticket Fare: ₹{fare}</div>
      </div>
      <div className="no-of-tickets">
        No. of Tickets: {num}
      </div>

      <div className="button-container">
        <button className="back-to-main-menu" onClick={backToMainMenu}>BACK TO MAIN MENU</button>
      </div>
    </div>
  </>
  );
}
 