import React from "react";
import Legal from "../../assets/images/legal.png";
import stamp from "../../assets/images/rubberstamp.png";
import "./products.css";

const Products = () => {
  return (
    <div className="page-container">
      <div className="mai1n-container products-section animate__animated animate__fadeIn  ">
        <img src={Legal} alt="legal paper" className="legal-paper " />
        <div className="products-text">
        <h1>Products</h1>
        </div>
        <img src={stamp} alt="logo stamp" className="page-logo-stamp" />
      </div>
    </div>
  );
}

export default Products