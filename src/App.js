import React from "react";
import "./App.css";

import Navbar from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
    </>
  );
};

export default App;
