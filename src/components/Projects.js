import React from "react";
import "./Projects.css";

function Projects() {
  const tagColors = {
    Hardware: "#e74c3c",
    Electronics: "#f39c12",
    Mechanical: "#27ae60",
    Documentation: "#3498db",
    Research: "#9b59b6",
    "Computer Vision": "#8e44ad",
    "Machine Learning": "#e67e22",
    Python: "#2ecc71",
    "Web Development": "#e91e63",
    React: "#2196f3",
    JavaScript: "#ff9800",
    Robotics: "#795548",
    "C++": "#607d8b",
    CSS: "#1572b6",
    Navigation: "#00bcd4",
  };

  const projects = [
    {
      id: 1,
      title: "Project Car Build",
      image: "/images/car-project.jpg",
      tags: ["Hardware", "Electronics", "Mechanical", "Documentation"],
      description:
        "Full restoration and modification of a classic car with modern upgrades",
    },
    {
      id: 2,
      title: "MRNAV: Multi-Robot Aware Planning and Control Stack",
      image: "https://img.youtube.com/vi/6WC0YCEctoE/maxresdefault.jpg",
      tags: ["Research", "Robotics", "C++", "Navigation"],
      description:
        "Multi-robot collision and deadlock-free navigation system for cluttered environments with hierarchical planning and control",
      videoLink: "https://www.youtube.com/watch?v=6WC0YCEctoE",
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      image: "/images/portfolio-screenshot.jpg",
      tags: ["Web Development", "React", "JavaScript", "CSS"],
      description:
        "Modern responsive portfolio website showcasing professional experience, projects, and skills with clean UI/UX design",
    },
    {
      id: 4,
      title: "Robotics Project",
      image: "/images/img-8.jpg",
      tags: ["Robotics", "C++", "Hardware"],
      description:
        "Autonomous robot system with sensor integration and control algorithms",
    },
    {
      id: 5,
      title: "Quality-Diversity Multi-Agent RL",
      image: "/images/qd-rl.png",
      tags: ["Python", "Machine Learning"],
      description: "TODO",
    },
    {
      id: 6,
      title: "Backyard Halfpipe",
      image: "/images/halfpipe.png",
      tags: ["Mechanical"],
      description: "TODO",
    },
    {
      id: 7,
      title: "Sindoku",
      image: "/images/",
      tags: ["Electronics"],
      description: "TODO",
    },
    {
      id: 8,
      title: "Schedule Gurus",
      image: "/images/",
      tags: ["Electronics"],
      description: "TODO",
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-content">
        <h1 className="projects-header">Projects</h1>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-tile">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
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
