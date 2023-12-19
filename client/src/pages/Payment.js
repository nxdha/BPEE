import React from 'react'
import '../css/Payment.css'

export default function Payment() {
  return (
    <div className="content-container">
      <div className="header">
        <b>PAYMENT</b>
      </div>
      <div className="payment-options">
        <div className="payment-option" onClick={() => showPaymentForm('cardForm')}>Card</div>
        <div className="payment-option" onClick={() => showPaymentForm('upiForm')}>UPI</div>
        <div className="payment-option" onClick={() => showPaymentForm('netbankingForm')}>Netbanking</div>
      </div>
      <div id="cardForm" className={`payment-form ${selectedForm === 'cardForm' ? 'active' : ''}`}>
        {/* Card payment form */}
        {/* ... */}
        <button onClick={processPayment}>Pay Now</button>
      </div>
      <div id="upiForm" className={`payment-form ${selectedForm === 'upiForm' ? 'active' : ''}`}>
        {/* UPI payment form */}
        {/* ... */}
        <button onClick={processPayment}>Pay Now</button>
      </div>
      <div id="netbankingForm" className={`payment-form ${selectedForm === 'netbankingForm' ? 'active' : ''}`}>
        {/* Netbanking payment form */}
        {/* ... */}
        <div className="netbanking-icons">
          {/* Bank icons */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
}
