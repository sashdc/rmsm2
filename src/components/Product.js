import React from "react";
import "animate.css";
import { Link } from "react-router-dom";


export default function Product(props) {
    return (
        
          <div className=" product-tile">
                         <Link to={props.url} className="nav-link">

            <img
              src={props.img}
              title={props.name}
              alt={props.name}
              className="product-image rounded "
            />
            <div className="overlay">
              <div>
                  {props.name}
              </div>
            </div>
            </Link>

          </div>
    );
  }