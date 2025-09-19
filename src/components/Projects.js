import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

function Projects() {
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();
  const tagColors = {
    Electronics: "#f39c12",
    Mechanical: "#27ae60",
    Research: "#9b59b6",
    "Machine Learning": "#e67e22",
    Python: "#2ecc71",
    "Web Development": "#e91e63",
    React: "#2196f3",
    Robotics: "#795548",
    "C++": "#607d8b",
    C: "#555555",
    Verilog: "black",
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
      tags: ["Research", "Robotics", "C++"],
      description:
        "Multi-robot collision and deadlock-free navigation system for cluttered environments with hierarchical planning and control",
      videoLink: "https://www.youtube.com/watch?v=6WC0YCEctoE",
      slug: "mrnav", // URL slug for routing
    },
    {
      id: 4,
      title:
        "Embedded Systems Design Laboratory (Senior Capstone): Sleep Right",
      image: "/images/sleep-right.png",
      tags: ["Electronics", "C"],
      description:
        "Full restoration and modification of a classic car with modern upgrades",
      imagePosition: "zoom-out-simple", // Add zoom-out for smaller display
      slug: "sleep-right", // URL slug for routing
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
      tags: ["Electronics", "Verilog"],
      description: "TODO",
      imagePosition: "zoom-out-simple", // Simple zoom out with border
      slug: "sudoku", // URL slug for routing
    },
    {
      id: 6,
      title: "Wizard's Chess",
      image: "/images/WizardChess.jpeg",
      tags: ["Robotics", "C++", "Electronics"],
      description:
        "Autonomous robot system with sensor integration and control algorithms",
      slug: "wizards-chess", // URL slug for routing
    },
    {
      id: 7,
      title: "Quality-Diversity Multi-Agent RL",
      image: "/images/qd-rl.png",
      tags: ["Research", "Python", "Machine Learning"],
      description: "TODO",
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
      tags: ["Web Development"],
      description: "TODO",
    },
  ];

  // Get all unique tags from projects
  const allTags = [...new Set(projects.flatMap((project) => project.tags))];

  // Filter projects based on selected tags
  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) =>
          selectedTags.every((tag) => project.tags.includes(tag))
        );

  // Handle tag selection
  const handleTagClick = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

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

        {/* Tag Filter */}
        <div className="tag-filter-container">
          <div className="tag-filter">
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`tag-filter-button ${
                  selectedTags.includes(tag) ? "active" : ""
                }`}
                onClick={() => handleTagClick(tag)}
                style={{
                  color: selectedTags.includes(tag)
                    ? "#fff"
                    : tagColors[tag] || "#9b59b6",
                  backgroundColor: selectedTags.includes(tag)
                    ? tagColors[tag] || "#9b59b6"
                    : "transparent",
                  borderColor: tagColors[tag] || "#9b59b6",
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

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
