import React from "react";
import "../App.css";
import "./CarSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faCar, faTools } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

function CarSection() {
  return (
    <div className="car-section-container">
      <div className="car-section-content">
        <div className="car-section-header">
          <h2 className="car-section-title">
            <FontAwesomeIcon icon={faCar} className="car-icon" />
            Pilar's Project Car
          </h2>
          <p className="car-section-subtitle">
            Building a track-ready 1999 Mazda Miata
          </p>
        </div>

        <div className="car-section-main">
          <div className="car-photo-section">
            <img
              src="images/car-project.jpg"
              alt="Pilar's Project Car"
              className="car-project-photo"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="car-photo-placeholder">
              <FontAwesomeIcon icon={faCar} className="placeholder-icon" />
              <p>Car project photo</p>
            </div>
          </div>

          <div className="tiktok-grid">
            <div className="tiktok-embed-container">
              <iframe
                src="https://www.tiktok.com/embed/7461294363293781278"
                width="325"
                height="575"
                frameBorder="0"
                allowFullScreen
                title="Engine Modifications TikTok"
                className="tiktok-embed"
                scrolling="no"
              />
            </div>

            <div className="tiktok-embed-container">
              <iframe
                src="https://www.tiktok.com/embed/7499510319824243999"
                width="325"
                height="575"
                frameBorder="0"
                allowFullScreen
                title="EVAP System TikTok"
                className="tiktok-embed"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarSection;
