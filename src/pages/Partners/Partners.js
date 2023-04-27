import React from "react";
import Legal from "../../assets/images/legal.png";
import stamp from "../../assets/images/rubberstamp.png";
import "./partners.css";
import Partner from "../../components/Partner";
import { partnerData } from "../partnerdata/partnerData";

const Partners = () => {
  return (
    <div className="page-container animate__animated animate__rotateInDownRight">
      <div className="maain-container partners-section   ">
        <img src={Legal} alt="legal paper" className="legal-paper " />
        <div className="partners-text">
        <h1>Partners</h1>
        <div className="partners  w-100">
          {partnerData.map((partner) => (
            <Partner
            key={partner.id}
            name={partner.name}
            url={partner.url}
            img={partner.logo}
                      />
          ))}
                
        </div>
        </div>
        <img src={stamp} alt="logo stamp" className="page-logo-stamp" />
      </div>
    </div>
  );
}

export default Partners