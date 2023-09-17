import React, { useState } from "react";
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

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  // Function to handle form submission (with client-side validation)
  const handleSubmit = async (e) => {
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

      // Create an object containing the form data
      const formDataToSend = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        content: formData.message, // Renamed to match the backend's expected field
      };

      try {
        // Make a POST request to the backend API
        const response = await fetch(
          "https://ashmademoiselle-8623d0938879.herokuapp.com/contact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataToSend),
          }
        );

        // Check if the response status is OK (200)
        if (response.ok) {
          const data = await response.json();
          setResponseMessage(data.message);
          // Optionally, reset the form after submission
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          // Handle errors if the response status is not OK
          console.error("An error occurred:", response.statusText);
          setErrorMessages({
            ...errorMessages,
            server: "An error occurred while sending the email",
          });
        }
      } catch (err) {
        console.error("An error occurred:", err);
        setErrorMessages({
          ...errorMessages,
          server: "An error occurred while sending the email",
        });
      }
    }
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
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
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
          {errorMessages.server && (
            <div className="error-message">{errorMessages.server}</div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Contact;
