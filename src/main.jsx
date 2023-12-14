import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ProfileCard from "./ProfileCard.jsx";
import Bio from "./Bio.jsx";
import Navbar from "./Navbar.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-container">
              <ProfileCard />
              <Bio />
            </div>
          }
        />
        <Route
          path="/Resume"
          element={
            <div className="main-container">
              <h1>Resume</h1>
            </div>
          }
        />
        <Route
          path="/Projects"
          element={
            //<div className="main-container">
            <div className="project-container">
              <h1>Projects</h1>
              <ProjectCard />
              <ProjectCard />
            </div>
          }
        />
        <Route
          path="/Contact"
          element={
            <div className="main-container">
              <h1>Contact</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
