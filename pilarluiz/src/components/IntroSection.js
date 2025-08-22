import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import "./IntroSection.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function TypingAnimation({ text, speed = 80, className = "" }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [isVisible, currentIndex, text, speed]);

  return (
    <span ref={elementRef} className={`typing-animation ${className}`}>
      {displayText}
      <span className="typing-cursor">|</span>
    </span>
  );
}

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
            <h3 className="name">
              <TypingAnimation
                text={'std::string name = "Pilar";'}
                speed={80}
                className="name-typing"
              />
            </h3>
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
