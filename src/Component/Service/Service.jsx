import React from "react";
import "./Service.css";
import Card from "../Card/Card";

//images import

import heart from "../../img/heartemoji.png";

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

        <button className="button s-button">Download</button>
      </div>
      <div className="right-service">

        <div style={{top:"19rem" , left:"16rem"}}>

        <Card
          // style={{ top: "14%", left: "60%" }}
          image={heart}
          title="Design"
          text="Figma,Sketch,Photoshop,Adobe Illustrator,Adobe xd"
        />

        </div>

        <div>

        <Card
          // style={{ top: "14%", left: "60%" }}
          image={heart}
          title="Desilokgn"
          text=" ,mzndckhunidchsu Illustrator,Adobe xd"
        />

        </div>
        <div>
        <Card
          // style={{ top: "14%", left: "60%" }}
          image={heart}
          title="ygugu"
          text="Figmdcnxdkjvhius niu Illustrator,Adobe xd"
        />
        </div>
        
        
      </div>
    </div>
  );
};

export default Service;
