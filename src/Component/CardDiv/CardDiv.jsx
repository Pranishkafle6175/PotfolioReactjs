import React from "react";
import Card from "../Card/Card";
import "./CardDiv.css";

import heart from "../../img/heartemoji.png";

const CardDiv = () => {
  return (
    <div className="carddiv">
      <div></div>
      <div className="card1">
        <Card
          style={{ top: "14%", left: "20%" }}
          image={heart}
          title="Design"
          text="Figma,Sketch,Photoshop,Adobe Illustrator,Adobe xd"
        />
      </div>
      <div className="card2">
        <Card
          style={{ top: "14%", left: "60%" }}
          image={heart}
          title="Android"
          text=" React,JAvascript,NodeJs"
        />
      </div>
      <div className="card3">
        <Card
          style={{ top: "14%", left: "90%" }}
          image={heart}
          title="Webdeveloper"
          text="Android Dveloper Illustrator,Adobe xd"
        />
      </div>
    </div>
  );
};

export default CardDiv;
