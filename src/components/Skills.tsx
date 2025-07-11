import React from "react";

function Skills() {
  return (
    <section id="skills" className="my-5 text-white lh-lg w-60 ">
      <section style={{ marginBottom: "2rem" }}>
        <h2>Skills</h2>
      </section>
      <section>
        <ul className="list-group list-group-flush rounded-3 shadow ">
          <li
            style={{ backgroundColor: "rgb(28, 31, 42)" }}
            className="list-group-item  text-white"
          >
            HTML
          </li>
          <li
            style={{ backgroundColor: "rgb(28, 31, 42)" }}
            className="list-group-item text-white"
          >
            CSS
          </li>
          <li
            style={{ backgroundColor: "rgb(28, 31, 42)" }}
            className="list-group-item text-white"
          >
            Javascript
          </li>
          <li
            style={{ backgroundColor: "rgb(28, 31, 42)" }}
            className="list-group-item  text-white"
          >
            React (+Bootstrap)
          </li>
          <li
            style={{ backgroundColor: "rgb(28, 31, 42)" }}
            className="list-group-item  text-white"
          >
            Django
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Skills;
