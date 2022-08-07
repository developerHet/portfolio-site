import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import Work from "./Work";
import Intro from "./Intro";
import Education from "./Education";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Work />
      <Education />
      <Projects />
      <Contact />
     </div>
  );
};

export default Home;
