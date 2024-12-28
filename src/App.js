import React from "react";
import Home from "./components/Home";
import CareersComponent from "./components/CareersComponent"; // Importing CareersComponent
 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/careersComponent" element={<CareersComponent />} /> 
//       </Routes>
//     </Router>
//   );
// }

  return (
    <div className="App">
      <Home /> 
      
    </div>
  );
}

export default App;
