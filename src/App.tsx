import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage";
import TypeformEmbed from "./components/TypeformEmbed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/appointment" element={<TypeformEmbed />} />
        {/* Add additional routes here */}
      </Routes>
    </Router>
  );
}

export default App;
