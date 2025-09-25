import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

function Projects() {
  const navigate = useNavigate();
  const tagColors = {
    Electronics: "#ff6b6b",
    Mechanical: "#4ecdc4",
    Research: "#45b7d1",
    "Machine Learning": "#96ceb4",
    Python: "#feca57",
    "Web Development": "#ff9ff3",
    React: "#54a0ff",
    Robotics: "#5f27cd",
    "C++": "#e74c3c",
    "Embedded C": "#ff9f43",
    Verilog: "#a55eea",
    "Multi-Agent Systems": "#9b59b6",
    "Reinforcement Learning": "#fd79a8",
    "Raspberry Pi": "#fdcb6e",
    JavaScript: "#e17055",
    Java: "#74b9ff",
    FPGA: "#a29bfe",
    VGA: "#fd79a8",
    ROS: "#f39c12",
    ATMega328P: "#e84393",
  };

  const projects = [
    // {
    //   id: 1,
    //   title: "1997 Mazda Miata",
    //   image: "/images/car-project.jpg",
    //   tags: ["Electronics", "Mechanical"],
    //   description:
    //     "Full restoration and modification of a classic car with modern upgrades",
    // },
    // {
    //   id: 2,
    //   title: "Espresso Machine",
    //   image: "/images/",
    //   tags: ["Electronics", "Mechanical"],
    //   description:
    //     "Full restoration and modification of a classic car with modern upgrades",
    // },
    {
      id: 3,
      title: "MRNAV: Multi-Robot Aware Planning and Control Stack",
      image: "https://img.youtube.com/vi/6WC0YCEctoE/maxresdefault.jpg",
      tags: ["C++", "ROS", "Multi-Agent Systems"],
      description:
        "Multi-robot collision and deadlock-free navigation system for cluttered environments with hierarchical planning and control",
      videoLink: "https://www.youtube.com/watch?v=6WC0YCEctoE",
      slug: "mrnav", // URL slug for routing
      date: "2022 - 2023",
    },
    {
      id: 4,
      title: "Sleep Right (Senior Capstone)",
      image: "/images/sleep-right.png",
      tags: ["Embedded C", "ATMega328P"],
      description:
        "Full restoration and modification of a classic car with modern upgrades",
      imagePosition: "zoom-out-simple", // Add zoom-out for smaller display
      slug: "sleep-right", // URL slug for routing
      date: "Spring 2023",
    },
    // TODO: Add distributed systems class project?
    // {
    //   id: 5,
    //   title: "Personal Portfolio Website",
    //   image: "/images/portfolio-screenshot.jpg",
    //   tags: ["Web Development", "React"],
    //   description:
    //     "Modern responsive portfolio website showcasing professional experience, projects, and skills with clean UI/UX design",
    // },
    {
      id: 9,
      title: "Sindoku: FPGA Sudoku Game",
      image: "/images/sudoku.PNG",
      tags: ["Verilog", "FPGA", "VGA"],
      description: "TODO",
      imagePosition: "zoom-out-simple", // Simple zoom out with border
      slug: "sudoku", // URL slug for routing
      date: "Spring 2021",
    },
    {
      id: 6,
      title: "Wizard's Chess",
      image: "/images/WizardChess.jpeg",
      tags: ["Python", "Raspberry Pi", "React"],
      description:
        "Autonomous robot system with sensor integration and control algorithms",
      slug: "wizards-chess", // URL slug for routing
      date: "Fall 2020 - Spring 2021",
    },
    {
      id: 7,
      title: "Quality-Diversity Multi-Agent Reinforcement Learning",
      image: "/images/qd-ma-rl.gif",
      tags: ["Python", "Machine Learning", "Reinforcement Learning"],
      description: "TODO",
      slug: "qd-marl", // URL slug for routing
      date: "Summer 2020",
    },
    // {
    //   id: 8,
    //   title: "Backyard Halfpipe",
    //   image: "/images/halfpipe.png",
    //   tags: ["Mechanical"],
    //   description: "TODO",
    // },
    {
      id: 10,
      title: "Schedule Gurus",
      image: "/images/ScheduleGurus.png",
      tags: ["JavaScript", "Java", "Python"],
      description: "TODO",
      slug: "schedule-gurus", // URL slug for routing
      date: "Fall 2020",
    },
  ];

  // Display all projects (no filtering)
  const filteredProjects = projects;

  // Handle project click
  const handleProjectClick = (project) => {
    if (project.slug) {
      navigate(`/projects/${project.slug}`);
    }
  };

  return (
    <div className="projects-container">
      <div className="projects-content">
        <h1 className="projects-header">Projects</h1>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-tile ${project.slug ? "clickable" : ""}`}
              onClick={() => handleProjectClick(project)}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`project-image ${project.imagePosition || ""}`}
                />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                {project.date && (
                  <div className="project-date">{project.date}</div>
                )}
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="project-tag"
                      style={{
                        color: tagColors[tag] || "#9b59b6",
                        borderColor: tagColors[tag] || "#9b59b6",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
