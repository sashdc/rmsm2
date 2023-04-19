import React from "react";
import fax from "../../assets/images/fax.png";
import stamp from "../../assets/images/stamp.png";
import about1 from "../../assets/images/polaroid1.png";
import about2 from "../../assets/images/polaroid2.png";


import "./about.css";

const About = () => {
  return (
    <div className="page-container animate__animated animate__fadeIn">
     <img src={about1} alt="about1" className="about-picture about1" />
        <img src={about2} alt="about1" className="about-picture about2" />  
      <div className=" about-section   ">
        <img src={fax} alt="fax paper" className="fax-paper " />
          

        <div className="about-body">
          <h1>About</h1>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <img src={stamp} alt="logo stamp" className="logo-stamp" />
      </div>
    </div>
  );
};

export default About;
