import React from "react";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Loginform from "./Components/Loginform";
import Signup from "./Components/Signup";
import Checkout from "./Components/Checkout"; // Import Checkout
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginform" element={<Loginform />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} /> {/* Checkout Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
