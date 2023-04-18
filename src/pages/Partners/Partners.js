import React from "react";
import Legal from "../../assets/images/legal.png";
import stamp from "../../assets/images/stamp.png";
import "./partners.css";

const Partners = () => {
  return (
    <div>
      <div className="main-container partners-section animate__animated animate__fadeInUp  ">
        <img src={Legal} alt="legal paper" className="legal-paper " />
        <div className="partners-text">
        <h1>Partners</h1>
        </div>
        <img src={stamp} alt="logo stamp" className="logo-stamp" />
      </div>
    </div>
  );
}

export default Partners