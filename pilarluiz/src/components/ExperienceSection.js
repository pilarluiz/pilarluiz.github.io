// import React, { useState } from "react";

// function ExperienceSection() {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       style={{
//         width: isHovered ? 200 : 100,
//         // height: isHovered ? 200 : 100,
//         backgroundColor: "lightblue",
//         transition: "width 0.3s",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         cursor: "pointer",
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       Hover Me!
//     </div>
//   );
// }

// export default ExperienceSection;

import React, { useState } from "react";
import "./ExperienceSection.css";

function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(1); // Track the active tab

  const experiences = [
    {
      id: 1,
      company: "NVIDIA (2025)",
      role: "Tegra Systems Architecture Intern",
      dates: "May 2025 - Aug 2025",
      content: [
        "Architected an LLM-driven framework for architecture design space exploration, integrating large language models with hardware simulators to enable autonomous analysis and iterative configuration proposals",
        "Designed a modular Python tool for flexible integration of architecture models and simulators, enabling reuse and extension across future design efforts",
      ],
    },
    {
      id: 2,
      company: "Applied Invention",
      role: "Software Engineer",
      dates: "Aug 2023 - Mar 2025",
      content: [
        "Designed and implemented a ROS2-based state machine in C++ for a large-scale (40’x4’x3’) robotic gantry system that moves on an overhead rail system, leveraging advanced C++ features such as templating and multi-threading within a distributed system.",
        "Designed and implemented software architecture components for a greenhouse environmental control system, including data collection, processing, and database storage, as well as API interfaces and environmental control logic to automate actuator behavior.",
      ],
    },
    {
      id: 3,
      company: "Meta",
      role: "Software Engineer Intern",
      dates: "May 2022 - Aug 2022",
      content: [
        "Increased team impact by developing full-stack software that processes A/B testing data in SQL databases using Python and intelligibly displays information on React front-end.",
        "Profiled Facebook Android application plugins and performance optimized code to generate a 12% speedup in app load time for over 50 million users.",
      ],
    },
    {
      id: 4,
      company: "NVIDIA (2021)",
      role: "Computer Architecture Intern",
      dates: "May 2021 - Aug 2021",
      content: [
        "Designed tests that exploited specific streaming multiprocessor (SM) behaviors, such as consistently hitting/missing in the multi-level cache hierarchy, long graphics pipeline latencies, and massive parallelism from the SIMD architecture.",
        "Developed a pipeline for running comparative power analysis studies using new tests and collected power measurements for various SM subunits, enabling the team to identify SM energy inefficiencies, discuss architectural tradeoffs, and explore redesign strategies for future GPUs.",
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <div className="experience-section-container">
      <h2 className="experience-section-header">Experience</h2>
      <div className="inner-experience-section-container">
        <div className="experience-tabs">
          {experiences.map((experience) => (
            <button
              key={experience.id}
              className={`tab ${activeTab === experience.id ? "active" : ""}`}
              onClick={() => setActiveTab(experience.id)}
            >
              {experience.company}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {experiences.map(
            (experience) =>
              activeTab === experience.id && (
                <div key={experience.id} className="tab-detail active">
                  <h2>
                    {experience.role} @{" "}
                    <span className="company">
                      {experience.company.includes("(")
                        ? experience.company.split("(")[0].trim()
                        : experience.company}
                    </span>
                  </h2>
                  <h3>{experience.dates}</h3>
                  <ul className="experience-bullets">
                    {experience.content.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
