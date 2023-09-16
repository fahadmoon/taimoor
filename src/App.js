import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Experience from "./Component/Experience";
import Education from "./Component/Education";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import { BrowserRouter as Router } from "react-router-dom";

// import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
