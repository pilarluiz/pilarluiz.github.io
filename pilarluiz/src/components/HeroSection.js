import React from "react";
import "../App.css";
import "./HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* TODO: flowers that rotate when you scroll */}
      {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
      {/* <span className="cout">std::cout &lt;&lt;</span> */}
      <h1>
        Pilar
        <br />
        Luiz
      </h1>
      {/* <span className="endl">&lt;&lt; std::endl;</span> */}
    </div>
  );
}

export default HeroSection;
