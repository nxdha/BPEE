import React from 'react'
import '../css/Ticketbook.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

export default function Ticketbook() {
  const [start,setStart] = useState("");
  const [end,setEnd] = useState("");
  const [number,setNumber] = useState("");
  const navigate = useNavigate();

  const stations = [
    'Aluva',
    'Pulinchodu',
    'Companypady',
    'Ambattukavu',
    'Muttom',
    'Kalamassery',
    'Cochin University',
    'Pathadipalam',
    'Edapally',
    'Changampuzha Park',
    'Palarivattom',
    'Jawaharlal Nehru Stadium',
    'Kaloor',
    'Town Hall',
    'Maharaja\'s College',
    'Ernakulam South',
    'Kadavanthra',
    'Elamkulam',
    'Vytila',
    'Thaikoodam',
    'Petta',
    'Vadakkekotta',
    'SN Junction'
  ]

  const handleSubmit = (event)=> {
    event.preventDefault();

    let a=0; 
    let b=0;
    for(let i=0 ;i<stations.length; i++) {
      if(stations[i] === start) {
        a=i;
      }
      if(stations[i] === end) {
        b=i;
      }
    }
    const fare =  Math.abs(a - b)*10*number;
    const data = {
      name: localStorage.getItem("name"),
      start: start,
      end: end,
      number: number,
      fare: fare
    }
    axios.put("http://localhost:3001/auth/ticket",data).then((response)=> {
      console.log(response.data);
    })
    navigate("/payment");
  }
  return (
    <div className="content-container">
    <div className="header">
      <b>TICKET BOOKING</b>
    </div>


    <div className="user-input-container">
      <input type="text" list="startRoutes" onChange={(e)=> {setStart(e.target.value)}} name="startRoute" placeholder="Start route" />
      <datalist id="startRoutes">
      <option value="Ambattukavu">Ambattukavu</option>
        <option value="Aluva">Aluva</option>
        <option value="Cochin university">Cochin university</option>
        <option value="Changampuzha park">Changampuzha park</option>
        <option value="Companypady">Companypady</option>
        <option value="Edapally">Edapally</option>
        <option value="Elamkulam">Elamkulam</option>
        <option value="Ernakulum south">Ernakulum south</option>
        <option value="Kadavanthara">Kadavanthara</option>
        <option value="Kalamassery">Kalamassery</option>
        <option value="Kaloor">Kaloor</option>
        <option value="jln stadium">JLN Stadium</option>
        <option value="muttom">Muttom</option>
        <option value="MGroad">MG road</option>
        <option value="Palarivattom">Palarivattom</option>
        <option value="Pathadipalam">Pathadipalam</option>
        <option value="Pulinchodu">Pulinchodu</option>
        <option value="Town hall">Town hall</option>
        <option value="Vyttila">Vyttila</option>
        <option value="SN Junction">SN Junction</option>
        <option value="Thaikoodam">Thaikoodam</option>
        <option value="Thrippunithara terminal">Thrippunithara terminal</option>
        <option value="Vadakkekotta">Vadakkekotta</option>
      </datalist>

      <input type="text" list="endRoutes" onChange={(e)=> {setEnd(e.target.value)}} name="endRoute" placeholder="End Route" />
      <datalist id="endRoutes">
      <option value="Ambattukavu">Ambattukavu</option>
        <option value="Aluva">Aluva</option>
        <option value="Cochin university">Cochin university</option>
        <option value="Changampuzha park">Changampuzha park</option>
        <option value="Companypady">Companypady</option>
        <option value="Edapally">Edapally</option>
        <option value="Elamkulam">Elamkulam</option>
        <option value="Ernakulum south">Ernakulum south</option>
        <option value="Kadavanthara">Kadavanthara</option>
        <option value="Kalamassery">Kalamassery</option>
        <option value="Kaloor">Kaloor</option>
        <option value="jln stadium">JLN Stadium</option>
        <option value="muttom">Muttom</option>
        <option value="MGroad">MG road</option>
        <option value="Palarivattom">Palarivattom</option>
        <option value="Pathadipalam">Pathadipalam</option>
        <option value="Pulinchodu">Pulinchodu</option>
        <option value="Town hall">Town hall</option>
        <option value="Vyttila">Vyttila</option>
        <option value="SN Junction">S N Junction</option>
        <option value="Thaikoodam">Thaikoodam</option>
        <option value="Thrippunithara terminal">Thrippunithara terminal</option>
        <option value="Vadakkekotta">Vadakkekotta</option>
      </datalist>

      <input type="number" name="ticketQuantity" onChange={(e)=> {setNumber(e.target.value)}} placeholder="Number of Tickets" min="1" max="30" />
        <button onClick={handleSubmit} type="submit">Generate Ticket</button>
    </div>

    <div className="square-container">
      <img src="/images/metropic.jpeg" alt="Metro Pic" />
    </div>
  </div>
  );
}
