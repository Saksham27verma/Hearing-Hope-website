// ContactForm.js
import React from 'react';
import './Contact-CSS/form.css';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2 style={{fontSize:'40px',}}>Contact Us</h2>
        <p style={{marginTop:'13px'}}>Feel free to reach out to us for any inquiries or feedback. Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Impedit at, sunt optio qui et eius tempore labore, totam excepturi delectus consequatur voluptates culpa exercitationem?<br/> Obcaecati est sit ipsam vel reiciendis!</p>
      </div>
      <div className="contact-content">
        <div className="contact-image">
          <img src="contactForm-Image.jpg" alt="Contact" height={'100%'} width={'50%'}/>
        </div>
        <form className="contact-form">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Your Message (optional)</label>
          <textarea id="message" name="message" rows="4"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
