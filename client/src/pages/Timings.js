import React from 'react'
import '../css/Timings.css'
export default function Timings() {
  return (
    <div>
    <h1>METRO TIMINGS</h1>
    <div className="container">
      <h1>WEEK DAYS</h1>
      <img src="./weekdat_tt.png" alt="Image 1" />
      {/* Replace 'weekdat_tt.png' with the path to your first image */}
      <h1>SUNDAYS</h1>
      <img src="./sndy_tt.png" alt="Image 2" />
      {/* Replace 'sndy_tt.png' with the path to your second image */}
    </div>
  </div>
  );
}
