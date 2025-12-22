const wizardsChess = {
  id: 6,
  title: "Wizard's Chess",
  image: "/images/WizardChess.jpeg",
  date: "Fall 2020 - Spring 2021",
  overview:
    "A real-life version of Wizard's Chess from Harry Potter, where chess pieces move autonomously across a board as dictated by player voice commands. This was a project for USC's electronics hobbyist club Makers. The project integrated web development, voice recognition, robotics, and mechanical engineering on a team of ~10 students.",
  makersLink: "https://viterbimakers.usc.edu/",
  videoLink: "https://www.youtube.com/watch?v=f9krP_1CuyY",
  imageClass: "wizards-chess-image",
  detailedOverview: `The goal was to create a real-life version of Wizard's Chess from Harry Potter, where chess pieces move autonomously across a board as dictated by player voice commands. This required integrating web development, voice recognition, robotics, and mechanical engineering into a cohesive system.

Players interact with a React web application that features voice recognition logic and displays the game board. Voice commands are processed and sent via HTTP requests to a Python Flask server running on a Raspberry Pi. The server controls stepper motors and electromagnets that move pieces across the physical board using magnetic attraction.

Each chess piece contains a magnet at its bottom that is attracted by electromagnets moving underneath the board. When pieces are captured, they dramatically break open by reversing the electromagnet polarity to flip the internal magnet and trigger the 3D-printed hinged sides to fall open.

The outcome was a fully functional autonomous chess system that was an ode to Harry Potter. I was the software subteam lead and was responsible for the voice recognition and web application.`,
  techStack: [
    "React",
    "Python",
    "Raspberry Pi",
    "Robotics",
    "Voice Recognition",
  ],
  reportLink: null,
  paperLink: null,
  githubLink: "https://github.com/uscmakers/WizardsChess",
  liveDemo: null,
  slug: "wizards-chess",
  tags: ["Python", "Raspberry Pi", "React"],
  description:
    "Autonomous robot system with sensor integration and control algorithms",
};

export default wizardsChess;

