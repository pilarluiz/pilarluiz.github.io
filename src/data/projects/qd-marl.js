const qdMarl = {
  id: 7,
  title: "Quality-Diversity Multi-Agent Reinforcement Learning",
  image: "/images/qd-ma-rl.gif",
  date: "Summer 2020",
  overview:
    "Quality-Diversity Multi-Agent Reinforcement Learning is a researchproject investigating how to train multiple agents simultaneously using reinforcement learning while encouraging diversity in behaviors. This research project was conducted with the Automatic Coordination of Teams Laboratory (now at Brown University) under Professor Nora Ayanian and Ph.D. student Eric Ewing.",
  actLabLink: "http://act.cs.brown.edu/",
  detailedOverview: `This research project investigated training multiple agents simultaneously using reinforcement learning while encouraging behavioral diversity. The goal was to develop a Quality-Diversity framework for multi-agent systems that balances exploration of new approaches with optimization of performance.

I created a Pursuit Domain environment where four predator agents must coordinate to trap a prey agent. My specific contribution involved setting up three predator agents with programmed behavior and using reinforcement learning to train one predator agent to coordinate with the others. This focused approach isolated the learning process while maintaining multi-agent coordination challenges.

Key technical challenges included designing the game environment, implementing programmed behaviors for baseline predators, and developing the reinforcement learning framework for the training predator to learn coordination strategies.

The outcome demonstrated the feasibility of training one agent to coordinate with programmed teammates, providing a foundation for extending reinforcement learning to simultaneously train multiple predators as a group. This research contributes to solving fundamental multi-agent coordination challenges.

I presented this research at the 2020 Viterbi Research Showcase and won Best Presentation.`,
  techStack: [
    "Python",
    "Machine Learning",
    "Reinforcement Learning",
    "Multi-Agent Systems",
  ],
  reportLink: null,
  paperLink: null,
  githubLink: null,
  liveDemo: null,
  slug: "qd-marl",
  tags: ["Python", "Machine Learning", "Reinforcement Learning"],
  description: "TODO",
};

export default qdMarl;

