import React from "react";
import "./Service.css";
import Resume from './Resume.pdf'

const Service = () => {
  return (
    <div className="service">
      <div className="left-service">
        <span>My Awesome </span>
        <span>services</span>

        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.ptio
          molestias! Recusandae dignissimos cupiditate saepe, animi atque non.
          necessitaeius itaque facilis magni impedit, obcaecati quas nostrum
          rem.
        </span>

        <a href={Resume} download>
        <button className="button s-button">Download</button>
        </a>

      </div>
    </div>
  );
};

export default Service;
