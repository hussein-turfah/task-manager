import "./App.scss";
import React from "react";
import Board from "./components/Board";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Board />
    </div>
  );
}

export default App;
