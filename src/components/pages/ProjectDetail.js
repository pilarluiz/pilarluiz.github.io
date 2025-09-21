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
  sudoku: {
    id: 9,
    title: "Sindoku: FPGA Sudoku Game",
    image: "/images/sudoku.PNG",
    overview:
      "Sindoku is a hardware-based Sudoku game implemented on FPGA using Verilog. This was my final project for USC's EE354: Introduction to Digital Circuits course, demonstrating digital logic design and FPGA programming skills.",
    courseLink: "https://web-app.usc.edu/soc/syllabus/20221/30978.pdf", // EE354 course syllabus
    // videoLink: "", // Add if available
    // stackImage: "/images/sudoku-stack.png", // Add if you have architecture diagrams
    imageClass: "sudoku-image", // Custom styling for smaller image
    detailedOverview: `Our project SINdoku uses a VGA monitor to display a sudoku puzzle that the user can solve using the Nexys-4 FPGA board. The player can use the left, right, up, and down buttons on the board to move to different cells in the puzzle and enter numbers by pressing the center button after using the FPGA switches to select a number.

After filling out all the empty cells on the board, the user can flip the "check solution" switch to verify their puzzle with the solution. If the user was correct, an LED on the board lights up to indicate success. Otherwise, a different LED lights up to indicate an incorrect answer.

I was responsible for the display implementation, including the VGA controller and rendering system. A major challenge was drawing the numbers on screen - since Sudoku doesn't have many repeating patterns, much of the number generation was manual and tedious work. Creating the game puzzles also required significant manual effort.

The outcome was a fully functional hardware-based Sudoku game that demonstrated digital design skills, VGA interfacing, and complex graphics implementation on FPGA. In retrospect, I would have imported number sprites to avoid wasting "human clocks" on manual digit creation. The project name "SINdoku" was a reference to our professor's emphasis on not wasting hardware clock cycles.`,
    techStack: ["Verilog", "FPGA", "VGA"], // Core technologies with graphics focus
    reportLink: "/documents/SINdoku_ProjectReport.pdf", // Final project report
    paperLink: null, // Add if available
    githubLink: "https://github.com/pilarluiz/SINdoku", // GitHub repository
    liveDemo: null, // Add if available
  },
  "wizards-chess": {
    id: 6,
    title: "Wizard's Chess",
    image: "/images/WizardChess.jpeg",
    overview:
      "A real-life version of Wizard's Chess from Harry Potter, where chess pieces move autonomously across a board as dictated by player voice commands. This was a project for USC's electronics hobbyist club Makers. The project integrated web development, voice recognition, robotics, and mechanical engineering on a team of ~10 students.",
    makersLink: "https://viterbimakers.usc.edu/", // USC Makers club
    // courseLink: "", // Add if you have course page
    videoLink: "https://www.youtube.com/watch?v=f9krP_1CuyY", // YouTube demonstration
    // stackImage: "/images/wizards-chess-stack.png", // Add if you have architecture diagrams
    imageClass: "wizards-chess-image", // Custom styling for smaller image
    detailedOverview: `The goal was to create a real-life version of Wizard's Chess from Harry Potter, where chess pieces move autonomously across a board as dictated by player voice commands. This required integrating web development, voice recognition, robotics, and mechanical engineering into a cohesive system.

Players interact with a React web application that features voice recognition logic and displays the game board. Voice commands are processed and sent via HTTP requests to a Python Flask server running on a Raspberry Pi. The server controls stepper motors and electromagnets that move pieces across the physical board using magnetic attraction.

Each chess piece contains a magnet at its bottom that is attracted by electromagnets moving underneath the board. When pieces are captured, they dramatically break open by reversing the electromagnet polarity to flip the internal magnet and trigger the 3D-printed hinged sides to fall open.

The outcome was a fully functional autonomous chess system that successfully demonstrated voice-controlled gameplay, precise robotic movement, and theatrical piece capture mechanics. The project showcased integration of multiple engineering disciplines in a complex, entertaining application.`,
    techStack: [
      "React",
      "Python",
      "Raspberry Pi",
      "Robotics",
      "Voice Recognition",
    ], // Full stack with robotics focus
    reportLink: null, // Add if available
    paperLink: null, // Add if available
    githubLink: "https://github.com/uscmakers/WizardsChess", // GitHub repository
    liveDemo: null, // Add if available
  },
  "schedule-gurus": {
    id: 10,
    title: "Schedule Gurus",
    image: "/images/ScheduleGurus.png",
    overview:
      "Schedule Gurus is a full-stack web application that takes a user's list of desired classes and generates functional schedules with no conflicting times. This was my group's final project for USC's CSCI 201: Principles of Software Development, built by a team of 6 students.",
    // courseLink: "https://web-app.usc.edu/soc/syllabus/20201/30978.pdf", // CSCI 201 course link - removed
    // videoLink: "https://www.youtube.com/watch?v=7edY_gAJkxA", // Project demonstration video - removed to use image instead
    detailedOverview: `The goal was to create a web application that automatically generates conflict-free class schedules for USC students. The system needed to take a user's list of desired classes and intelligently create functional schedules without time conflicts.

The frontend features a form where users can input their desired classes. This uses JavaScript XMLHttpRequest to communicate with the backend Java servlet. We integrated an API to scrape the USC registrar for comprehensive class information, then passed this data to our main algorithm that utilizes bitsets to find possible schedule generations with no conflicting times.

The system includes user authentication with login functionality, allowing users with accounts to save their schedules to the database. Generated schedules are displayed on the frontend with clear time conflict resolution.

I was responsible for building the UI and helped with the database logic and connecting all the pieces. Key technical challenges included implementing the bitset-based scheduling algorithm, integrating with USC's registrar API, managing database connections with PHP, and creating seamless frontend-backend communication.

The schedule algorithm wasn't very sophisticated—it used a brute force approach (greedy algorithm) that was slow but effective. A more optimized algorithm would improve performance in future iterations.

The outcome was a fully functional web application that successfully generated conflict-free schedules for USC students. The project demonstrated full-stack development skills across multiple technologies: HTML/CSS for frontend design, JavaScript for client-server communication, PHP for database operations, Java for backend servlets, and Python for additional backend processing.`,
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "Java", "Python"], // Complete tech stack from description
    reportLink: null, // Add if available
    paperLink: null, // Add if available
    githubLink: "https://github.com/schedule-gurus/usc-schedule-planner", // GitHub repository
    liveDemo: "https://303.itpwebdev.com/~pluiz/gui/main", // Live demo from README
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
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
