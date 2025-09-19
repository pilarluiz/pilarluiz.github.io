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
  "sleep-right": {
    id: 4,
    title: "Embedded Systems Design Laboratory (Senior Capstone): Sleep Right",
    image: "/images/sleep-right.png",
    overview:
      "Sleep Right is a prototype for a smart wearable device designed to improve sleep quality by waking users during their optimal sleep stage. This was my electrical engineering senior design capstone project for USC's EE 459Lx Embedded Systems Design Laboratory.",
    courseLink: "https://ece-classes.usc.edu/ee459/", // EE 459Lx course page
    // videoLink: "", // Add if available
    // stackImage: "/images/sleep-right-stack.png", // Add if you have architecture diagrams
    imageClass: "sleep-right-image", // Custom styling for smaller image
    detailedOverview: `My semester's design theme was "a smart device that benefits the environment in some manner." Our team chose to go the health route, focusing on sleep quality, specifically optimal wakeup times. The goal was to address jarring wake-ups that interrupt deep sleep cycles, leaving people groggy and tired.

We developed a wearable prototype that monitors sleep patterns and intelligently wakes users during their lightest sleep phase within a specified time window. The system used an ATMega328P microcontroller with inputs from a pulse sensor, real-time clock, rotary encoder, and buttons, with outputs to a haptic motor for wake-up alerts and LCD for user interface.

I was responsible for most of the software stack, including sanitizing heart rate inputs, calculating running averages, and implementing the sleep stage detection algorithms that classified user sleep phases based on heart rate patterns.

The outcome was a working prototype that successfully demonstrated intelligent wake-up functionality. In retrospect, we recognized that reliable sleep stage detection requires additional inputs beyond heart rate, such as accelerometers to detect movement and more sophisticated algorithms for personalized sleep pattern recognition. While our prototype validated the core concept, transitioning to a functional consumer product would require significant additional development.`,
    techStack: ["Embedded C", "ATMega328P"], // Core technologies
    reportLink: "/documents/SleepRight_FinalReport.pdf", // Final project report
    paperLink: null, // Add if available
    githubLink: "https://github.com/pilarluiz/sleep-right", // GitHub repository
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
                      .split("EE 459Lx Embedded Systems Design Laboratory")
                      .map((subpart, subindex, subarray) =>
                        subindex === subarray.length - 1 ? (
                          subpart
                        ) : (
                          <>
                            {subpart}
                            <a
                              href={project.courseLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="resl-link"
                            >
                              EE 459Lx Embedded Systems Design Laboratory
                            </a>
                          </>
                        )
                      )
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
              className={`project-detail-image ${project.imageClass || ""}`}
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
              {project.reportLink && (
                <a
                  href={project.reportLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button"
                >
                  Project Report
                </a>
              )}
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
                  GitHub
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
              {project.courseLink && (
                <a
                  href={project.courseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button"
                >
                  Course Info
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
