import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
  return (
    <Router>
      <Routes />
      //this is changes //this is a conflict test //this is new change/hello
    </Router>
  );
}

export default App;
