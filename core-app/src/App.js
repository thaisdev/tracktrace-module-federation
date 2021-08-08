import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./menu";
import Page from "./page";
import "./app.css";

const App = () => {
  return (
    <Router>
      <Menu />
      <Page />
    </Router>
  );
};

export default App;
