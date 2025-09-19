import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProjectDetail.css";

// Import project data - we'll move this to a shared file later
const projectsData = {
  mrnav: {
    id: 3,
    title: "MRNAV: Multi-Robot Aware Planning and Control Stack",
    image: "https://img.youtube.com/vi/6WC0YCEctoE/maxresdefault.jpg",
    overview:
      "MRNAV is collision- and deadlock-free navigation stack for multi-robot teams in cluttered environments. I collaborated on this research project at USC with the Robotic Embedded Systems Laboratory.",
    reslLink: "https://robotics.usc.edu/resl/",
    videoLink: "https://www.youtube.com/watch?v=6WC0YCEctoE",
    stackImage: "/images/mrnav-stack.png",
    detailedOverview: `The goal was to solve multi-robot navigation in cluttered environments where traditional approaches fail due to collisions and deadlocks. We developed a hierarchical framework in C++ and ROS with three decision-making levels: short, medium, and long-term planning modules.

I implemented the short horizon planner that incorporates Safety Barrier Certificates (SBCs) for collision-free navigation. We tested in simulation and achieved 8-hour simulated flights with eight quadrotors navigating 300 dynamic obstacles with zero collisions or deadlocks, leading to a pre-print research paper.`,
    techStack: ["C++", "ROS", "Multi-Agent Systems", "Path Planning"],
    paperLink: "https://arxiv.org/pdf/2308.13499", // arXiv paper
    githubLink: "https://github.com/baskinburak/mrnav", // GitHub repository
    liveDemo: null, // Add if available
  },
};

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="project-detail-content">
          <h1>Project Not Found</h1>
          <Link to="/projects" className="back-link">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <div className="project-detail-content">
        <Link to="/projects" className="back-link">
          ← Back to Projects
        </Link>

        <div className="project-detail-header">
          <h1 className="project-detail-title">{project.title}</h1>
          {project.overview && (
            <p className="project-overview">
              {project.overview
                .split("Robotic Embedded Systems Laboratory")
                .map((part, index, array) =>
                  index === array.length - 1 ? (
                    part
                  ) : (
                    <>
                      {part}
                      <a
                        href={project.reslLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resl-link"
                      >
                        Robotic Embedded Systems Laboratory
                      </a>
                    </>
                  )
                )}
            </p>
          )}
        </div>

        <div className="project-detail-media">
          {project.videoLink ? (
            <div className="project-video-container">
              <iframe
                src={`https://www.youtube.com/embed/${
                  project.videoLink.split("v=")[1]
                }`}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="project-video"
              ></iframe>
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="project-detail-image"
            />
          )}
        </div>

        <div className="project-detail-body">
          {project.detailedOverview && (
            <section className="project-section">
              <h2>Overview</h2>
              <p className="detailed-overview">{project.detailedOverview}</p>
            </section>
          )}

          {project.stackImage && (
            <section className="project-section">
              <h2>System Architecture</h2>
              <img
                src={project.stackImage}
                alt="MRNAV Navigation Stack"
                className="stack-image"
              />
            </section>
          )}

          {project.techStack && (
            <section className="project-section">
              <h2>Tech Stack</h2>
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          <section className="project-section">
            <h2>Links</h2>
            <div className="project-links">
              {project.paperLink && (
                <a
                  href={project.paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button"
                >
                  Read Paper
                </a>
              )}
              {project.videoLink && (
                <a
                  href={project.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button"
                >
                  Watch Video
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button"
                >
                  View Code
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button"
                >
                  Live Demo
                </a>
              )}
              {project.reslLink && (
                <a
                  href={project.reslLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button"
                >
                  RESL Lab
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
