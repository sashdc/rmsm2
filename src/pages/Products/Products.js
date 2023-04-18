import React from "react";
import Legal from "../../assets/images/legal.png";
import stamp from "../../assets/images/stamp.png";
import "./products.css";

const Products = () => {
  return (
    <div>
      <div className="main-container products-section animate__animated animate__fadeInUp  ">
        <img src={Legal} alt="legal paper" className="legal-paper " />
        <div className="products-text">
        <h1>Products</h1>
        </div>
        <img src={stamp} alt="logo stamp" className="logo-stamp" />
      </div>
    </div>
  );
}

export default Products