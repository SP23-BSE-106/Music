import React from "react";
import Home from "./components/Home";
import Play from "./components/play";
 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} /> 
      </Routes>
    </Router>
  );
}

export default App;
