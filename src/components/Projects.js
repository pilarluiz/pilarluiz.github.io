import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import projectsData from "../data/projectsData";

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
    SystemVerilog: "#9b51e0",
    "Multi-Agent Systems": "#9b59b6",
    "Reinforcement Learning": "#fd79a8",
    "Raspberry Pi": "#fdcb6e",
    JavaScript: "#e17055",
    Java: "#74b9ff",
    FPGA: "#a29bfe",
    VGA: "#fd79a8",
    ROS: "#f39c12",
    ATMega328P: "#e84393",
    LLVM: "#1857b6",
    Flex: "#ff6b35",
    "Recursive Descent Parsing": "#ff9f43",
    SSA: "#a55eea",
    "Register Allocation": "#26de81",
    "Compiler Design": "#ff4757",
    "RISC-V": "#00b894",
    "Computer Architecture": "#0984e3",
    "Out-of-Order Execution": "#6c5ce7",
    CUDA: "#76b900",
    cuBLAS: "#76b900",
    CUTLASS: "#76b900",
  };

  // Convert projectsData object to array and filter out projects without slugs
  const projects = Object.values(projectsData).filter(
    (project) => project.slug
  );

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
