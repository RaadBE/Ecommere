import React from "react";
import Navbar from "../components/Navbar";
import FooterBottom from "../components/FooterBottom";
import "./Contact.css";
function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contactContainer">
        <div class="section-1">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
          <div className="your-name">YOUR NAME</div>
          <div className="your-email">YOUR EMAIL</div>
          <div className="subject">SUBJECT</div>
          <div className="your-message">YOUR MESSAGE</div>

          <button className="send-button">SEND</button>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}
export default Contact;
