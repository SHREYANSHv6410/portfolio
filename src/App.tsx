import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import CarouselProj from "./components/CarouselProj";
import Astronaut from "./components/Astronaut";

function App() {
  const ScrollTo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="bg-dark text-white">
        <header>
          <NavigationBar />
        </header>

        <main className="container mt-5 ">
          <Banner />
          <section className="SpaceBetweenComponents">
            <About />
          </section>

          <section className="SpaceBetweenComponents">
            <Skills />
            <Astronaut />
          </section>
          <section className="SpaceBetweenComponents">
            <Projects />
          </section>
          <section className="SpaceBetweenComponents">
            <CarouselProj />
          </section>
        </main>
        <section className="SpaceBetweenComponents">
          <Contact />
        </section>

        <button
          type="button"
          className="btn"
          onClick={ScrollTo}
          style={{
            background: "gray",
            color: "cyan",
            opacity: 0.7,
            position: "fixed",
            bottom: "30px",
            right: "30px",
            zIndex: 1000,
          }}
        >
          Back to Top
        </button>
        <Footer />
      </div>
    </div>
  );
}

export default App;
