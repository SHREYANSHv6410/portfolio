import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-dark text-white">
      <header>
        <Navbar />
      </header>
      <main className="container mt-5 ">
        <About />

        <Skills />

        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
