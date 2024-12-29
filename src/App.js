import React from "react";
import Home from "./components/Home";
import CareersComponent from "./components/CareersComponent"; // Importing CareersComponent
 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<CareersComponent />} /> 
      </Routes>
    </Router>
  );
}

export default App;
