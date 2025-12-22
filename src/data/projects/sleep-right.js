const sleepRight = {
  id: 4,
  title: "Sleep Right",
  image: "/images/sleep-right.png",
  date: "Spring 2023",
  overview:
    "Sleep Right is a prototype for a smart wearable device designed to improve sleep quality by waking users during their optimal sleep stage. This was my electrical engineering senior design capstone project for USC's EE 459Lx Embedded Systems Design Laboratory.",
  courseLink: "https://ece-classes.usc.edu/ee459/",
  imageClass: "sleep-right-image",
  detailedOverview: `My semester's design theme was "a smart device that benefits the environment in some manner." Our team chose to go the health route, focusing on sleep quality, specifically optimal wake-up times. The goal was to address jarring wake-ups that interrupt deep sleep cycles, leaving people groggy and tired.

We developed a wearable prototype that monitors sleep patterns and intelligently wakes users during their lightest sleep phase within a specified time window. The system used an ATMega328P microcontroller with inputs from a pulse sensor, real-time clock, rotary encoder, and buttons, with outputs to a haptic motor for wake-up alerts and LCD for user interface.

I was responsible for most of the software stack, including sanitizing heart rate inputs, calculating running averages, and implementing the sleep stage detection algorithms that classified user sleep phases based on heart rate patterns.

The outcome was a working prototype that successfully demonstrated intelligent wake-up functionality. In retrospect, we recognized that reliable sleep stage detection requires additional inputs beyond heart rate, such as accelerometers to detect movement and more sophisticated algorithms for personalized sleep pattern recognition. While our prototype validated the core concept, transitioning to a functional consumer product would require significant additional development.`,
  techStack: ["Embedded C", "ATMega328P"],
  reportLink: "/documents/SleepRight_FinalReport.pdf",
  paperLink: null,
  githubLink: "https://github.com/pilarluiz/sleep-right",
  liveDemo: null,
  slug: "sleep-right",
  tags: ["Embedded C", "ATMega328P"],
  description:
    "Full restoration and modification of a classic car with modern upgrades",
  imagePosition: "zoom-out-simple",
};

export default sleepRight;

