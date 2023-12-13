import React from "react";
import ReactDOM from "react-dom/client";
import ProfileCard from "./ProfileCard.jsx";
import Bio from "./Bio.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="left-sibling"></div>
    <div className="main-container">
      <ProfileCard />
      <Bio />
    </div>
  </React.StrictMode>
);
