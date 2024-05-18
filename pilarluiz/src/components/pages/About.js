import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCircle,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

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
        <div className="contact-container">
          {/* <span className="green-triangle"></span>
          <span className="green-rectangle"></span> */}
          {/* <img
              // src="images/pilar-headshot.png"
              alt="Pilar Headshot"
              className=""
            /> */}
          <div className="contact">
            <h2>Contact</h2>
            <h3>
              <FontAwesomeIcon
                icon={faLocationDot}
                className="fa-loaction-dot"
              />
              Los Angeles, CA
            </h3>
            <h3>pilarluiz13 [at] gmail [dot] com</h3>
          </div>
        </div>
        <div className="education-skills-container">
          <div className="education-container">
            <h1 className="education">Education</h1>
            <div className="year-container">
              <h2 className="years">2019 - 2023</h2>
            </div>
            <div className="university-degree-container">
              <h3 className="university">University of Southern California</h3>
              <h4 className="degree">
                B.S. Computer Engineering & Computer Science
              </h4>
            </div>
          </div>
          <div className="skills-container">
            <h1 className>Skills</h1>
            <div className="skills">
              <div className="skill">C/C++</div>
              <div className="skill">Python</div>
              <div className="skill">ROS</div>
              <div className="skill">IoT</div>
            </div>
          </div>
          <div className="research-container">
            <h1>Research</h1>
            <div className="research-paper">
              MRNAV: Multi-Robot Aware Planning and Control Stack for Collision
              and Deadlock-free Navigation in Cluttered Environments
            </div>
          </div>
          <div className="experience-container">
            <h1>Experience</h1>
            <div className="experiences">
              <div className="experience">
                <h2 className="years">2023 - Now</h2>
                <div className="company-role-container">
                  <h3 className="role">Robotics Engineer</h3>
                  <h4 className="company">
                    <i>Applied Invention</i>
                  </h4>
                </div>
              </div>
              <div className="experience">
                <h2 className="years">2022</h2>
                <div className="company-role-container">
                  <h3 className="role">Software Engineer Intern</h3>
                  <h4 className="company">
                    <i>Meta Platforms, Inc.</i>
                  </h4>
                </div>
              </div>
              <div className="experience">
                <h2 className="years">2021</h2>
                <div className="company-role-container">
                  <h3 className="role">Computer Architecture Intern</h3>
                  <h4 className="company">
                    <i>NVIDIA Corporation</i>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-container">
          <div className="undergrad-container">
            <h1>Undergraduate Highlights</h1>
            <div className="activity">
              <h2 className="activity-name">
                <FontAwesomeIcon icon={faStar} className="fa-star" />
                Undergraduate Research Assistant
              </h2>
              <div className="activity-bullet">
                <FontAwesomeIcon icon={faCircle} className="fa-circle" />
                Automatic Coordination of Teams Laboratory
              </div>
              <div className="activity-bullet">
                <FontAwesomeIcon icon={faCircle} className="fa-circle" />
                Robotic Embedded Systems Laboratory
              </div>
            </div>
            <div className="activity">
              <h2 className="activity-name">
                <FontAwesomeIcon icon={faStar} className="fa-star" />
                Undergraduate Teaching Assistant
              </h2>
              <div className="activity-bullet">
                <FontAwesomeIcon icon={faCircle} className="fa-circle" />
                Data Structures & Object Oriented Design in C++
              </div>
              <div className="activity-bullet">
                <FontAwesomeIcon icon={faCircle} className="fa-circle" />
                Introduction to Computer Systems
              </div>
              <div className="activity-bullet">
                <FontAwesomeIcon icon={faCircle} className="fa-circle" />
                Introduction to Embedded Systems
              </div>
            </div>
            <div className="activity">
              <h2 className="activity-name">
                <FontAwesomeIcon icon={faStar} className="fa-star" />
                USC Makers
              </h2>
              <div className="activity-bullet">
                <FontAwesomeIcon icon={faCircle} className="fa-circle" />
                Electronics hobbyist student organization exploring robotics,
                IoT, & embedded systems (firmware)
              </div>
            </div>
            <div className="activity">
              <h2 className="activity-name">
                <FontAwesomeIcon icon={faStar} className="fa-star" />
                Triathlon
              </h2>
            </div>
          </div>
          <div className="hobbies-container">
            <h1>Hobbies & Interests</h1>
            <div className="hobbies">
              <div className="row-1">
                <div className="hobby orange">Mandarin</div>
                <div className="hobby green">Spanish</div>
              </div>
              <div className="row-2">
                <div className="hobby pink">Running</div>
              </div>
              <div className="row-3">
                <div className="hobby light-green">Film</div>
                <div className="hobby yellow">Travel</div>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-container">
          <button className="resume">Resume</button>
        </div>
      </div>
    </div>
  );
}
