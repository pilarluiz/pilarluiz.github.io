import React from "react";
import "../App.css";
import "./IntroSection.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function IntroSection() {
  return (
    <div className="intro-container">
      <div className="inner-intro-container">
        <div className="heading-container">
          <div>
            <h1 className="intro-heading">
              Hello,
              <br />
              World!
            </h1>
            <h3 className="name">std::string name = "Pilar";</h3>
          </div>
          <p className="intro-p">
            I'm a <b>computer engineer</b> passionate about the intersection of
            hardware and software, with a particular interest in computer
            architecture. I've worked in industry across computer architecture,
            software engineering, and robotics.
          </p>
        </div>
        <div className="intro-image">
          <img
            src="images/pilar-headshot.JPG"
            alt="Pilar Headshot"
            className="headshot"
          />
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
