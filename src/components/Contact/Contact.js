import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7a4wsag', 'template_0t5rxm2', formRef.current, 'KXsXJUL8MfTIf81o6').then((result) => {
      // console.log(result.text);
      alert('Thank you for your message!');
    }, (error) => {
      // console.log(error.text);
      alert('An error occurred. Please try again later.');
    });
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <p>Let's get in touch!</p>
      <h1>Contact.</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <label>
          Your Name
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Your email
          <input
            type="email"
            name="email"
            placeholder="Ex: abc@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Your Message
          <textarea
            name="message"
            placeholder="Do you have anything to say?"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
