import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MsmeDashboard from "./pages/MsmeDashboard"; // Import the MSME Dashboard component
// import Login from "./pages/Login"; // Example: Login page
// import Signup from "./pages/Signup"; // Example: Signup page

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}

          {/* MSME Dashboard Route */}
          <Route path="/dashboard" element={<MsmeDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;