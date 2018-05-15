import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Projects from "./components/Projects";
import Labs from "./components/Labs";
import About from "./components/About";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/henriquenasc">About</Link>
            <Link to="/henriquenasc/projects">Projects</Link>
            <Link to="/henriquenasc/labs">Labs</Link>
          </header>
          <Route exact path="/henriquenasc" component={About} />
          <Route exact path="/henriquenasc/projects" component={Projects} />
          <Route exact path="/henriquenasc/labs" component={Labs} />
          {/* <Route exact path='*' component={NotFound} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
