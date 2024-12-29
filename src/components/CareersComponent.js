import React, { useState } from 'react';
import './Careers.css'; // Import the CSS file

function CareersComponent() {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentSelect = (payment) => {
    setSelectedPayment(payment);
  };

  return (
    <div className="careers-container">
      <p>CareersComponent is rendering!</p>  {/* Temporary log to verify rendering */}
      <h1>To Start Listening, Just Pick A Payment Method.</h1>
      <h2>Multiple Payment Method</h2>
      <p>You can choose the payment method that has been provided and this really supports your payment, then you can pay anytime.</p>
      <div className="payment-options">
        <button
          className={selectedPayment === 'Zeddpay' ? 'selected' : ''}
          onClick={() => handlePaymentSelect('Zeddpay')}
        >
          <img src="zeddpay-logo.png" alt="Zeddpay" />
        </button>
        <button
          className={selectedPayment === 'Visa' ? 'selected' : ''}
          onClick={() => handlePaymentSelect('Visa')}
        >
          <img src="visa-logo.png" alt="Visa" />
        </button>
        <button
          className={selectedPayment === 'GPay' ? 'selected' : ''}
          onClick={() => handlePaymentSelect('GPay')}
        >
          <img src="gpay-logo.png" alt="GPay" />
        </button>
        <button
          className={selectedPayment === 'ApplePay' ? 'selected' : ''}
          onClick={() => handlePaymentSelect('ApplePay')}
        >
          <img src="apple-pay-logo.png" alt="Apple Pay" />
        </button>
        <button
          className={selectedPayment === 'PayPal' ? 'selected' : ''}
          onClick={() => handlePaymentSelect('PayPal')}
        >
          <img src="paypal-logo.png" alt="PayPal" />
        </button>
      </div>
   
    </div>
  );
}

export default CareersComponent;
