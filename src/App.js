import React from "react";
import "./App.css";
import NavBar from "./components/Menu";
import Main from "./components/Main";
import Projects from "./components/Projects";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container App-header">
          <NavBar />
          <Switch>
            <Route exact path="/henriquenasc/" component={Main} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
