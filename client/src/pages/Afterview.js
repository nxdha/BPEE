import React from 'react'
import '../css/Afterview.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Afterview() {
  const [start,setStart] = useState("");
  const [end,setEnd] = useState("");
  const [fare,setFare] = useState("");
  const [name,setName] = useState("");
  const [num,setNum] = useState("");

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
  const navigate = useNavigate()

  const cancelTicket = ()=> {
    axios.put("http://localhost:3001/auth/delete",{name: localStorage.getItem("name")}).then((response)=> {
      navigate("/mvt")
  })
  }

  return (
    <div className="content-container">
    <div className="header">
      <b>METRO VIRTUAL TICKETS</b>
    </div>
    <img src="/images/qr.png" alt="QR Code" className="qr-code" />
    <div className="info-container">
      <div>Name of Ticket Holder: {name}</div>
      <div>Start Route: {start}</div>
      <div>End Route: {end}</div>
      <div>Ticket Fare: ₹{fare}</div>
    </div>
    <div className="no-of-tickets">No. of Tickets: {num}</div>
    <div className="cancel-container" onClick={cancelTicket}>
      <b>CANCEL TICKET</b>
    </div>
  </div>
  );
}
