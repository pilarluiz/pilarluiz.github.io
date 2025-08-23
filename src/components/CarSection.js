import React, { useState, useEffect } from "react";
import "../App.css";
import "./CarSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

function CarSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 820);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
            <div className="instagram-embed-container">
              {!isMobile ? (
                <iframe
                  src="https://www.instagram.com/p/DL9LrU2OeJH/embed/captioned/"
                  width="380"
                  height="675"
                  frameBorder="0"
                  allowFullScreen
                  title="Car Project Instagram"
                  className="instagram-embed"
                  scrolling="no"
                />
              ) : (
                <div className="instagram-thumbnail">
                  <iframe
                    src="https://www.instagram.com/p/DL9LrU2OeJH/embed"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    title="Car Project Instagram"
                    className="instagram-photo"
                    scrolling="no"
                  />
                </div>
              )}
            </div>

            <div className="instagram-embed-container">
              {!isMobile ? (
                <iframe
                  src="https://www.instagram.com/p/DJHf-ADpyF1/embed/captioned/"
                  width="380"
                  height="675"
                  frameBorder="0"
                  allowFullScreen
                  title="Car Project Instagram Reel"
                  className="instagram-embed"
                  scrolling="no"
                />
              ) : (
                <div className="instagram-thumbnail">
                  <iframe
                    src="https://www.instagram.com/p/DJHf-ADpyF1/embed/captioned/"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    title="Car Project Instagram Reel"
                    className="instagram-photo"
                    scrolling="no"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarSection;
