import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Name from "./Name.jsx";
//import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Name />
    <App />
  </React.StrictMode>
);
