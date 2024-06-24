import React from "react";
import AppRoutes from "./routes";
import { Link } from "react-router-dom";
import "./assets/css/common.css";
import "./App.css";
import NewHeader from "./components/Header/NewHeader";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NewHeader />
      <AppRoutes />
      <Footer/>
    </div>
  );
};

export default App;
