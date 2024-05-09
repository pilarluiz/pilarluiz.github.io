import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircle } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="introduction-container">
          <div className="description">
            <h1>
              Hello, <br />
              I'm Pilar!
            </h1>
            <p>
              I’m a multidisciplinary engineer from the Silicon Valley. I’m
              interested in the intersection of hardware and software
              exemplified in robotics and computer architecture. I enjoy working
              on physical products that blend engineering disciplines.
            </p>
            <button className="linkedin">linkedin.com/in/pilarluiz</button>
          </div>
        </div>
        <div className="green-section">
          <div className="education">
            <h1>Education</h1>
            <h2>2019 - 2023</h2>
            <h3>University of Southern California</h3>
            <h4>
              <i>B.S. Computer Engineering & Computer Science</i>
            </h4>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <div className="skill">C/C++</div>
            <div className="skill">Python</div>
            <div className="skill">ROS</div>
            <div className="skill">IoT</div>
          </div>
        </div>
        <div className="experience">
          <h1>Experience</h1>
          <ul>
            <li>
              <h2>2023 - Now</h2>
              <h3>Robotics Engineer</h3>
              <h4>
                <i>Applied Invention</i>
              </h4>
            </li>
            <li>
              <h2>2023 - Now</h2>
              <h3>Software Engineer Intern</h3>
              <h4>
                <i>Meta Platforms, Inc.</i>
              </h4>
            </li>
            <li>
              <h2>2023 - Now</h2>
              <h3>Computer Architecture Intern</h3>
              <h4>
                <i>NVIDIA Corporation</i>
              </h4>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="research">
            <h1>Research</h1>
            <div className="research-paper">
              MRNAV: Multi-Robot Aware Planning and Control Stack for Collision
              and Deadlock-free Navigation in Cluttered Environments
            </div>
          </div>
          <div className="undergrad-involvement">
            <h1>Undergraduate Involvement</h1>
            <ul>
              <li>
                <h2>
                  <FontAwesomeIcon icon={faStar} className="fa-star" />
                  Undergraduate Research Assistant
                </h2>
                <ul>
                  <li>Automatic Coordination of Teams Laboratory</li>
                  <li>Robotic Embedded Systems Laboratory</li>
                </ul>
                <li>
                  <h2>
                    <FontAwesomeIcon icon={faStar} className="fa-star" />
                    Undergraduate Teaching Assistant
                  </h2>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faCircle} className="fa-star" />
                      Data Structures & Object Oriented Design in C++
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCircle} className="fa-star" />
                      Introduction to Computer Systems
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCircle} className="fa-star" />
                      Introduction to Embedded Systems
                    </li>
                  </ul>
                </li>
              </li>
              <li>
                <h2>
                  <FontAwesomeIcon icon={faStar} className="fa-star" />
                  USC Makers
                </h2>
                <ul>
                  <li>
                    Electronics hobbyist student organization exploring
                    robotics, IoT, & embedded systems (firmware)
                  </li>
                </ul>
              </li>
              <li>
                <h2>
                  <FontAwesomeIcon icon={faStar} className="fa-star" />
                  Triathlon
                </h2>
              </li>
            </ul>
          </div>
          <div className="hobbies">
            <h1>Hobbies & Interests</h1>
            <div className="hobby orange">Mandarin</div>
            <div className="hobby green">Spanish</div>
            <div className="hobby pink">Running</div>
            <div className="hobby light-green">Film</div>
            <div className="hobby yellow">Travel</div>
          </div>
          <button className="resume">
            <h2>Resume</h2>
          </button>
        </div>
      </div>
    </div>
  );
}