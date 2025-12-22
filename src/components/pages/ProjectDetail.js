import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProjectDetail.css";
import projectsData from "../../data/projectsData";

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
          {project.date && (
            <div className="project-detail-date">{project.date}</div>
          )}
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
                            .split(
                              "Introduction to Digital Circuits course (EE354)"
                            )
                            .map((coursepart, courseindex, coursearray) =>
                              courseindex === coursearray.length - 1 ? (
                                coursepart
                                  .split(
                                    "EE354: Introduction to Digital Circuits course"
                                  )
                                  .map((ee354part, ee354index, ee354array) =>
                                    ee354index === ee354array.length - 1 ? (
                                      ee354part
                                        .split("Makers")
                                        .map(
                                          (
                                            makerspart,
                                            makersindex,
                                            makersarray
                                          ) =>
                                            makersindex ===
                                            makersarray.length - 1 ? (
                                              makerspart
                                                .split(
                                                  "Automatic Coordination of Teams Laboratory"
                                                )
                                                .map(
                                                  (
                                                    actpart,
                                                    actindex,
                                                    actarray
                                                  ) =>
                                                    actindex ===
                                                    actarray.length - 1 ? (
                                                      actpart
                                                        .split(
                                                          "ITP 439 Compiler Design"
                                                        )
                                                        .map(
                                                          (
                                                            itppart,
                                                            itpindex,
                                                            itparray
                                                          ) =>
                                                            itpindex ===
                                                            itparray.length -
                                                              1 ? (
                                                              itppart
                                                                .split(
                                                                  "ECE 411: Computer Organization & Design"
                                                                )
                                                                .map(
                                                                  (
                                                                    ece411part,
                                                                    ece411index,
                                                                    ece411array
                                                                  ) =>
                                                                    ece411index ===
                                                                    ece411array.length -
                                                                      1 ? (
                                                                      ece411part
                                                                    ) : (
                                                                      <>
                                                                        {
                                                                          ece411part
                                                                        }
                                                                        <a
                                                                          href={
                                                                            project.courseLink
                                                                          }
                                                                          target="_blank"
                                                                          rel="noopener noreferrer"
                                                                          className="resl-link"
                                                                        >
                                                                          ECE
                                                                          411:
                                                                          Computer
                                                                          Organization
                                                                          &
                                                                          Design
                                                                        </a>
                                                                      </>
                                                                    )
                                                                )
                                                            ) : (
                                                              <>
                                                                {itppart}
                                                                <a
                                                                  href={
                                                                    project.courseLink
                                                                  }
                                                                  target="_blank"
                                                                  rel="noopener noreferrer"
                                                                  className="resl-link"
                                                                >
                                                                  ITP 439
                                                                  Compiler
                                                                  Design
                                                                </a>
                                                              </>
                                                            )
                                                        )
                                                    ) : (
                                                      <>
                                                        {actpart}
                                                        <a
                                                          href={
                                                            project.actLabLink
                                                          }
                                                          target="_blank"
                                                          rel="noopener noreferrer"
                                                          className="resl-link"
                                                        >
                                                          Automatic Coordination
                                                          of Teams Laboratory
                                                        </a>
                                                      </>
                                                    )
                                                )
                                            ) : (
                                              <>
                                                {makerspart}
                                                <a
                                                  href={project.makersLink}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="resl-link"
                                                >
                                                  Makers
                                                </a>
                                              </>
                                            )
                                        )
                                    ) : (
                                      <>
                                        {ee354part}
                                        <a
                                          href={project.courseLink}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="resl-link"
                                        >
                                          EE354: Introduction to Digital
                                          Circuits course
                                        </a>
                                      </>
                                    )
                                  )
                              ) : (
                                <>
                                  {coursepart}
                                  <a
                                    href={project.courseLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resl-link"
                                  >
                                    Introduction to Digital Circuits course
                                    (EE354)
                                  </a>
                                </>
                              )
                            )
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
          ) : projectId !== "uscc" ? (
            <img
              src={project.image}
              alt={project.title}
              className={`project-detail-image ${project.imageClass || ""} ${
                projectId === "qd-marl" ? "qd-marl-gif" : ""
              }`}
            />
          ) : null}

          {/* Legend for QD MA RL project */}
          {projectId === "qd-marl" && (
            <div className="agent-legend">
              <h4>Agent Legend:</h4>
              <div className="legend-items">
                <div className="legend-item">
                  <div className="legend-color brown"></div>
                  <span>Prey Agent</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color black"></div>
                  <span>Programmed Predator Agents</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color purple"></div>
                  <span>Predator Agent in Training</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="project-detail-body">
          {project.detailedOverview && (
            <section className="project-section">
              <h2>Overview</h2>
              <p className="detailed-overview">{project.detailedOverview}</p>
            </section>
          )}

          {project.optimizationsContent && (
            <section className="project-section">
              <h2>Optimizations</h2>
              <p className="detailed-overview">
                {project.optimizationsContent}
              </p>
            </section>
          )}

          {project.optimizations && (
            <section className="project-section">
              <h2>Optimizations</h2>
              <div className="optimizations-list">
                {project.optimizations.map((opt, index) => (
                  <div key={index} className="optimization-item">
                    <div className="optimization-name">{opt.name}</div>
                    <ul>
                      <li className="optimization-description">
                        {opt.description}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
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
              {project.makersLink && (
                <a
                  href={project.makersLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button"
                >
                  USC Makers
                </a>
              )}
              {project.actLabLink && (
                <a
                  href={project.actLabLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button"
                >
                  ACT Lab
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
