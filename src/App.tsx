import React from "react";
import AppRoutes from "./routes";
import { Link } from "react-router-dom";
import "./assets/css/common.css";
import "./App.css";
import NewHeader from "./components/Header/NewHeader";

const App = () => {
  return (
    <div>
      <NewHeader />
      <AppRoutes />
    </div>
  );
};

export default App;
