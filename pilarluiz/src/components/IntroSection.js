import React from "react";
import "../App.css";
import "./IntroSection.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function IntroSection() {
  return (
    <div className="pink-background">
      <div className="intro-container">
        <h1 className="intro-heading">
          Hello
          <br />
          World!
        </h1>
        <h3 className="name">std::string name = "pilar luiz";</h3>
        <p className="intro-p">
          I'm a computer engineer passionate about the intersection of hardware
          and software, with a particular interest in computer architecture.
          I've worked in industry across computer architecture, software
          engineering, and robotics.
        </p>
      </div>
    </div>
  );
}

export default IntroSection;
