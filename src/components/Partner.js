import React from "react";

export default function Partner(props) {
    return (
        
          <div className="logocontainer  m-4   ">
           <a href={props.url} target="blank">
                   <img
              src={props.img}
              alt={props.name}
              title={props.name}
              className="partner-logo rounded"
            />
            </a>
            <div className="overlay">
              <div className="text partner-link">
                {/* <a href={props.url} target="blank">
                  {props.name}
                </a> */}
              </div>
            </div>
          </div>
    );
  }