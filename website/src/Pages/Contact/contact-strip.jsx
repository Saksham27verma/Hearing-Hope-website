// ContactStrip.jsx
import React from 'react';
import './Contact-CSS/ContactStrip.css';

const ContactStrip = () => {
  return (
    <div className="contact-strip-container">
      <div className="contact-strip-content">
        <div className="contact-strip-text">
          <h1>Contact us for quick support</h1>
          <p style={{marginTop:'10px'}}>We are available 24/7 to assist you. Feel free to reach out! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, cupiditate. Nobis cupiditate recusandae aliquid perspiciatis velit quisquam quos quod! Porro odio minus ea reiciendis quis eius voluptatem reprehenderit eaque laudantium.</p>
        </div>
        <div className="contact-buttons">
          <button className="btn">
            <span>WhatsApp</span>
            <img src="whatsapp.webp" alt="WhatsApp" style={{marginLeft:'5px'}} />
          </button>
          <button className="btn">
            <span>Call Now</span>
            <img src="call.png" alt="Call Now" style={{marginLeft:'10px'}}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactStrip;
