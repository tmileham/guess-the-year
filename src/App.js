import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ConfigureQuiz from "./ConfigureQuiz";

// Components
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/configure" element={<ConfigureQuiz />} />
      </Routes>
    </Router>
  );
};

export default App;
