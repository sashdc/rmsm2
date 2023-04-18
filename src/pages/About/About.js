import React from "react";
import fax from "../../assets/images/fax.png";
import stamp from "../../assets/images/stamp.png";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="main-container about-section animate__animated animate__fadeInUp  ">
        <img src={fax} alt="fax paper" className="fax-paper " />
        <div className="about-text">
        <h1>About</h1>
        </div>
        <img src={stamp} alt="logo stamp" className="logo-stamp" />
      </div>
    </div>
  );
}

export default About