import "./App.scss";
import React from "react";
import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import BoardPage from "./pages/BoardPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<BoardPage />} />
      </Routes>
    </div>
  );
}

export default App;
