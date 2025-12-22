const mrnav = {
  id: 3,
  title: "MRNAV: Multi-Robot Aware Planning and Control Stack",
  image: "https://img.youtube.com/vi/6WC0YCEctoE/maxresdefault.jpg",
  date: "2022 - 2023",
  overview:
    "MRNAV is collision- and deadlock-free navigation stack for multi-robot teams in cluttered environments. I collaborated on this research project at USC with the Robotic Embedded Systems Laboratory.",
  reslLink: "https://robotics.usc.edu/resl/",
  videoLink: "https://www.youtube.com/watch?v=6WC0YCEctoE",
  stackImage: "/images/mrnav-stack.png",
  detailedOverview: `The goal was to solve multi-robot navigation in cluttered environments where traditional approaches fail due to collisions and deadlocks. We developed a hierarchical framework in C++ and ROS with three decision-making levels: short, medium, and long-term planning modules.

I implemented the short horizon planner that incorporates Safety Barrier Certificates (SBCs) for collision-free navigation. We tested in simulation and achieved 8-hour simulated flights with eight quadrotors navigating 300 dynamic obstacles with zero collisions or deadlocks, leading to a pre-print research paper.`,
  techStack: ["C++", "ROS", "Multi-Agent Systems", "Path Planning"],
  paperLink: "https://arxiv.org/pdf/2308.13499",
  githubLink: "https://github.com/baskinburak/mrnav",
  liveDemo: null,
  slug: "mrnav",
  tags: ["C++", "ROS", "Multi-Agent Systems"],
  description:
    "Multi-robot collision and deadlock-free navigation system for cluttered environments with hierarchical planning and control",
};

export default mrnav;

