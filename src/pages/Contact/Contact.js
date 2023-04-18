import React from "react";
import fax from "../../assets/images/fax.png";
import stamp from "../../assets/images/stamp.png";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <div className="main-container contact-section animate__animated animate__fadeInUp  ">
        <img src={fax} alt="fax paper" className="fax-paper " />
        <div className="contact-text">
        <h1>contact</h1>
        </div>
        <img src={stamp} alt="logo stamp" className="logo-stamp" />
      </div>
    </div>
  );
}

export default Contact