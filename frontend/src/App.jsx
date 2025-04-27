import "./App.scss";
import React from "react";
import NavBar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import BoardPage from "./pages/BoardPage";
import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<BoardPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
