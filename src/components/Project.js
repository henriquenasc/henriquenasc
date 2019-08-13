import React from "react";

function Project(props) {
  const { name, description, demo, code } = props;
  return (
    <div className="column is-quarter-desktop is-half-tablet">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title is-centered is-uppercase">{name}</p>
        </header>
        <div className="card-content">
          <div className="content">
            <p className="has-text-left">{description}</p>
          </div>
        </div>
        <footer className="card-footer">
          <a href={`${demo}`} target="blank_" className="card-footer-item">
            Demo
          </a>
          <a href={`${code}`} target="blank_" className="card-footer-item">
            Code
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Project;
