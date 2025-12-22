const scheduleGurus = {
  id: 10,
  title: "Schedule Gurus",
  image: "/images/ScheduleGurus.png",
  date: "Fall 2020",
  overview:
    "Schedule Gurus is a full-stack web application that takes a user's list of desired classes and generates functional schedules with no conflicting times. This was my group's final project for USC's CSCI 201: Principles of Software Development, built by a team of 6 students.",
  detailedOverview: `The goal was to create a web application that automatically generates conflict-free class schedules for USC students. The system needed to take a user's list of desired classes and intelligently create functional schedules without time conflicts.

The frontend features a form where users can input their desired classes. This uses JavaScript XMLHttpRequest to communicate with the backend Java servlet. We integrated an API to scrape the USC registrar for comprehensive class information, then passed this data to our main algorithm that utilizes bitsets to find possible schedule generations with no conflicting times.

The system includes user authentication with login functionality, allowing users with accounts to save their schedules to the database. Generated schedules are displayed on the frontend with clear time conflict resolution.

I was responsible for building the UI and helped with the database logic and connecting all the pieces. Key technical challenges included implementing the bitset-based scheduling algorithm, integrating with USC's registrar API, managing database connections with PHP, and creating seamless frontend-backend communication.

The outcome was a fully functional web application that successfully generated conflict-free schedules for USC students. The project demonstrated full-stack development skills across multiple technologies: HTML/CSS for frontend design, JavaScript for client-server communication, PHP for database operations, Java for backend servlets, and Python for additional backend processing. In the future, we would try to make the application faster because it took a lot of time to go through all the schedule combinations.`,
  techStack: ["HTML", "CSS", "JavaScript", "PHP", "Java", "Python"],
  reportLink: null,
  paperLink: null,
  githubLink: "https://github.com/schedule-gurus/usc-schedule-planner",
  liveDemo: "https://303.itpwebdev.com/~pluiz/gui/main",
  slug: "schedule-gurus",
  tags: ["JavaScript", "Java", "Python"],
  description: "TODO",
};

export default scheduleGurus;

