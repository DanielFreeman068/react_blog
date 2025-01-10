import React, { useState } from 'react';
import '../css/Subscribe.css';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); 

  const isValidEmail = (email) => {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubscribe = () => {
    if (!isValidEmail(email)) {
      setStatus('invalid');
      return;
    }

    setStatus('subscribing');

    setTimeout(() => {
      setStatus('subscribed');
    }, 2000);
  };

  return (
    <div className="subscribe-container" id="subscribe">
      <h2 className="subscribe-heading">
        Get the best sent to your inbox, every month
      </h2>
      <div className="subscribe-form">
        {status === '' || status === 'invalid' ? (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus(''); 
              }}
              className={`subscribe-input ${
                status === 'invalid' ? 'invalid-input' : ''
              }`}
            />
            <button onClick={handleSubscribe} className="subscribe-button">
              Subscribe
            </button>
          </>
        ) : status === 'subscribing' ? (
          <div className="subscribe-status">Subscribing...</div>
        ) : (
          <div className="subscribe-status">Subscribed!</div>
        )}
      </div>
      {status === 'invalid' && (
        <p className="error-message">Please enter a valid email address.</p>
      )}
      <p className="subscribe-note">Once monthly, no spam</p>
    </div>
  );
};

export default Subscribe;
