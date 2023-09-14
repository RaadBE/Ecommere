import React, { useState } from "react";
// import Navbar from "../common/Navbar";
import FooterBottom from "../common/FooterBottom";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState(null);
  const [errorMessages, setErrorMessages] = useState({});

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission (with client-side validation)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous error and response messages
    setErrorMessages({});

    // Client-side validation checks
    let isValid = true;

    if (!formData.name.trim()) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        name: "Name is required",
      }));
      isValid = false;
    }

    if (!formData.email.trim()) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
      isValid = false;
    }

    if (!formData.subject.trim()) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        subject: "Subject is required",
      }));
      isValid = false;
    }

    if (!formData.message.trim()) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        message: "Message is required",
      }));
      isValid = false;
    }

    if (isValid) {
      // If all fields are valid, you can proceed with form submission
      setResponseMessage("Message sent successfully!");

      // Optionally, reset the form after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <div>
      <section className="contactSection">
        <div className="contactContainer">
          <h1>Get in Touch</h1>
          <h2>Send me a message using this form!</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="input">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="text">Name</span>
                  <span className="line"></span>
                </div>
                {errorMessages.name && (
                  <div className="error-message">{errorMessages.name}</div>
                )}
              </div>

              <div className="col">
                <div className="input">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="text">Email</span>
                  <span className="line"></span>
                </div>
                {errorMessages.email && (
                  <div className="error-message">{errorMessages.email}</div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="input">
                  <textarea
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <span className="text">Subject</span>
                  <span className="line"></span>
                </div>
                {errorMessages.subject && (
                  <div className="error-message">{errorMessages.subject}</div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="input">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <span className="text">Your Message</span>
                  <span className="line"></span>
                </div>
                {errorMessages.message && (
                  <div className="error-message">{errorMessages.message}</div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col">
                <button className="send-button" type="submit" value="Send">
                  SEND
                </button>
              </div>
            </div>
          </form>
          {responseMessage && (
            <div className="success-message">{responseMessage}</div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Contact;
