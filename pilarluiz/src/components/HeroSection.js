import React from "react";
import "../App.css";
import "./HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* TODO: flowers that rotate when you scroll */}
      <h1>
        Pilar
        <br />
        Luiz
      </h1>
    </div>
  );
}

export default HeroSection;
