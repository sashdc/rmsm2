import React from "react";
import Legal from "../../assets/images/legal.png";
import stamp from "../../assets/images/rubberstamp.png";
import { productData } from "./productdata/productData";
import "./products.css";
import Product from "../../components/Product";


const Products = () => {
  return (
    <div className="page-container animate__animated animate__rotateInDownLeft">
      <div className=" products-section   ">
        <img src={Legal} alt="legal paper" className="legal-paper " />
        <div className="products-text">
        <h1>Products</h1>
 
      <div className="d-flex  flex-wrap justify-content-center">
        <div className="products">
          {/* map over productData to list product and create thumbnails */}
          {productData.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              url={product.url}
              img={product.image}
            />
          ))}
        </div>
      </div>
        </div>
        <img src={stamp} alt="logo stamp" className="page-logo-stamp" />
      </div>
    </div>
  );
}

export default Products