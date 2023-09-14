import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Experience from "./Component/Experience";
import Education from "./Component/Education";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
