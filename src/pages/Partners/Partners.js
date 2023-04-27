import React from "react";
import Legal from "../../assets/images/legal.png";
import stamp from "../../assets/images/rubberstamp.png";
import "./partners.css";

const Partners = () => {
  return (
    <div className="page-container animate__animated animate__rotateInDownRight">
      <div className="maina-container partners-section   ">
        <img src={Legal} alt="legal paper" className="legal-paper " />
        <div className="partners-text">
        <h1>Partners</h1>
        </div>
        <img src={stamp} alt="logo stamp" className="page-logo-stamp" />
      </div>
    </div>
  );
}

export default Partners