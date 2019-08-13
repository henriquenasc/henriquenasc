import React from "react";
import Project from "./Project";

function Projects() {
  const projects = [
    {
      name: "Person website",
      description:
        "My personal site made with reactjs and hosted on github with gh-pages.",
      demo: "https://henriquenasc.github.io/henriquenasc/",
      code: "https://github.com/henriquenasc/henriquenasc"
    }
  ];

  return (
    <div className="container">
      <div className="section">
        <div className="columns is-multiline">
          {projects.map(data => (
            <Project {...data} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects;
