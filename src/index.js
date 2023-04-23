import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/pages/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./utilities/ScrollToTop/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </React.StrictMode>
);
