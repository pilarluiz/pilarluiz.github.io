import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import IntroSection from "../IntroSection";
// import Projects from "../Projects";
import CarSection from "../CarSection";
import ExperienceSection from "../ExperienceSection";

function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ExperienceSection />
      {/* <Projects /> */}
      <CarSection />
    </>
  );
}

export default Home;
