import React from 'react'
import '../css/Payment.css'

export default function Payment() {
  function showPaymentForm(formId) {
    var forms = document.querySelectorAll('.payment-form');
    forms.forEach(function (form) {
      form.style.display = 'none';
    });

    const selectedForm = document.getElementById(formId);
    if (selectedForm) {
      selectedForm.style.display = 'block';
    }
  }

  function processPayment() {
    
  }

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
    
        <button onClick={processPayment}>Pay Now</button>
      </div>
      <div id="upiForm" className={`payment-form ${selectedForm === 'upiForm' ? 'active' : ''}`}>
  
        <button onClick={processPayment}>Pay Now</button>
      </div>
      <div id="netbankingForm" className={`payment-form ${selectedForm === 'netbankingForm' ? 'active' : ''}`}>
      
        <div className="netbanking-icons">
         
        </div>
      </div>
    </div>
  );
}
