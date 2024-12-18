import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatusMessage("Thank you for reaching out! We will get back to you soon.");
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Contact Us</h2>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </form>
      </div>
      <div className="location-side">
        <h3>Our Location</h3>
        <p>1234 Address St, City, Country</p>
        <div className="map">
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.8430507252842!2d76.86975947504338!3d30.87734307863028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff55d9e0ed113%3A0x34a6cadf9a13d341!2sCHITKARA%20UNIVERSITY%2C%20BADDI!5e1!3m2!1sen!2sin!4v1734511760515!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;


