import React from "react";
import AppRoutes from "./routes";
import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <AppRoutes />
    </div>
  );
};

export default App;
