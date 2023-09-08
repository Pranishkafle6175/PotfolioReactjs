import React from "react";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import selfimage from "../../img/boy.png";
import Crown from "../../img/crown.png";
import Thumb from "../../img/thumbup.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="left-intro">
        <span>Hello! , I Am</span>
        <span>Pranish Kafle</span>
        <span>
          I am android developer working with java/Kotlin and firebase.I am
          android developer working with java/Kotlin and firebase.I am android
          developer working with java/Kotlin and firebase
        </span>

        <button className="button"> Hire me</button>

        <div className="images">
          <img src={github} alt="github" />
          <img src={linkedin} alt="linkedin" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
      <div className="right-intro">

      <div style={{ top: "14%", left: "50%" }}>
          <FloatingDiv image={Crown} text1="Web" text2="Developer" />
        </div>

        <img src={selfimage} alt="selfimage" />
        

        <div id="selfimage"
        style={{top:"70%",left:"5s%"}}>
          <FloatingDiv image={Thumb} text1="Android" text2="Developer" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
