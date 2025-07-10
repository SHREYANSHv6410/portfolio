import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function Projects() {
  const projectList = [
    {
      title: "Pokédex App",
      link: "https://github.com/SHREYANSHv6410/pokedex",
      description:
        "The Pokédex App is a beginner-friendly full-stack project built using Django for the backend and standard HTML/CSS for the frontend. It fetches Pokémon data from the PokéAPI and displays it in a clean, user-friendly layout. Users can view basic information such as name and type for each Pokémon. This project demonstrates how to consume external APIs in Django, pass data to templates, and render dynamic content using Django’s template language — all while keeping the frontend lightweight and minimal.",
    },
    {
      title: "BG Color Selector",
      link: "https://github.com/SHREYANSHv6410/ReactColorPicker",
      description:
        "This is a simple interactive React application that allows users to change the background color of the page dynamically by entering a valid CSS color name or hex code. It uses the useState hook to manage the current background color and updates the styling in real time based on user input. The project demonstrates how to bind input fields to component state, handle user events, and apply inline styling dynamically in a React environment.",
    },
    {
      title: "useState Counter App",
      link: "https://github.com/SHREYANSHv6410/ReactCounter",
      description:
        "The Counter App is a basic React project that showcases the use of React’s useState hook for managing local component state. It includes buttons to increment, decrement, and reset a counter value displayed on the screen. The app reinforces core React concepts like state management, event handling, and conditional rendering. It’s a great demonstration of how React components respond to user interaction and update the UI reactively.",
    },
  ];

  return (
    <section id="projects" className="my-5 rounded-3 ">
      <section style={{ marginBottom: "2rem" }}>
        <h2>Projects</h2>
      </section>
      <Row>
        {projectList.map((proj, index) => (
          <Col md={6} key={index} className="my-2 rounded-3 shadow">
            <Card text="white" style={{ backgroundColor: "rgb(44, 51, 55)" }}>
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>
                  {proj.description}
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    {proj.title}
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Projects;
