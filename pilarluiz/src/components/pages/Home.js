import React from "react";
import "../../App.css";
import IntroSection from "../IntroSection";
import Projects from "../Projects";
import CarSection from "../CarSection";
import ExperienceSection from "../ExperienceSection";

function Home() {
  return (
    <>
      <IntroSection />
      <ExperienceSection />
      <Projects />
      <CarSection />
    </>
  );
}

export default Home;
