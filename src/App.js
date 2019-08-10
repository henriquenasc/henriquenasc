import React from "react";
import "./App.css";
import NavBar from "./components/Menu";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container App-header">
        <NavBar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
