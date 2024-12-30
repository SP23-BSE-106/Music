import React, { useState } from "react";
import "./Pricing.css";
import Navbar from "./Navbar";

const Pricing = () => {
  
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [showForm, setShowForm] = useState(false); 
  const [selectedPlan, setSelectedPlan] = useState(null); 

  const handleSubscribeClick = (plan) => {
    setSelectedPlan(plan);
    setShowForm(true); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    alert(`Subscription successful for ${selectedPlan} plan!`);
    setShowForm(false); 
  };

  return (
    <div className="pricing-container">
      <header className="pricing-header">
        <h1>MusicMash Premium Plans</h1>
      </header>
      <main className="pricing-content">
        <section className="pricing-box">
          <h2>Basic Plan</h2>
          <p className="price">$5.99/month</p>
          <ul>
            <li>Ad-free listening experience</li>
            <li>Access to basic playlists</li>
            <li>Standard quality audio</li>
          </ul>
          <button
            className="subscribe-btn"
            onClick={() => handleSubscribeClick("Basic Plan")}
          >
            Subscribe Now
          </button>
        </section>

        <section className="pricing-box">
          <h2>Premium Plan</h2>
          <p className="price">$9.99/month</p>
          <ul>
            <li>Ad-free listening experience</li>
            <li>Access to exclusive playlists</li>
            <li>Offline music download</li>
            <li>High-quality audio</li>
            <li>Priority customer support</li>
          </ul>
          <button
            className="subscribe-btn"
            onClick={() => handleSubscribeClick("Premium Plan")}
          >
            Subscribe Now
          </button>
        </section>
      </main>


      {showForm && (
        <div className="subscription-form">
          <h3>Enter Your Details for {selectedPlan}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pinCode">Pin Code</label>
              <input
                type="password"
                id="pinCode"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Confirm Subscription
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => setShowForm(false)} 
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Pricing;
