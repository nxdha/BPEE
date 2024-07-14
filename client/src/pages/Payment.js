import React from 'react';
import '../css/Payment.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const navigate = useNavigate();
  const [selectedForm, setSelectedForm] = useState('cardForm');

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
    navigate('/Afterpayment');
  }

  return (
    <div className="content-container">
      <div className="header">
        <b>PAYMENT</b>
      </div>
      <div className="payment-options">
        <div className="payment-option" onClick={() => showPaymentForm('cardForm')}>
          Card
        </div>
        <div className="payment-option" onClick={() => showPaymentForm('upiForm')}>
          UPI
        </div>
        <div className="payment-option" onClick={() => showPaymentForm('netbankingForm')}>
          Netbanking
        </div>
      </div>
      <div id="cardForm" className="payment-form">
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" />

        <label htmlFor="expiryDate">Expiry Date:</label>
        <input type="text" id="expiryDate" placeholder="MM/YY" />

        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" placeholder="123" />

        <button onClick={processPayment}>Pay Now</button>
      </div>
      <div id="upiForm" className="payment-form">
        <label htmlFor="upiId">UPI ID:</label>
        <input type="text" id="upiId" placeholder="yourname@upi" />

        <button onClick={processPayment}>Pay Now</button>
      </div>
      <div id="netbankingForm" className="payment-form">
        <div className="netbanking-icons">
          <div className="bank-container">
            <img src="/images/axis.jpeg" alt="Axis Bank" onClick={processPayment} />
            <div className="bank-name">Axis Bank</div>
          </div>
          <div className="bank-container">
            <img src="/images/icici.jpeg" alt="ICICI Bank" onClick={processPayment} />
            <div className="bank-name">ICICI Bank</div>
          </div>
          <div className="bank-container">
            <img src="/images/bank.jpg" alt="Other Banks" onClick={processPayment} />
            <div className="bank-name">Other Banks</div>
          </div>
        </div>
      </div>
    </div>
  );
}
