import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/henriquenasc/">About</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
}
