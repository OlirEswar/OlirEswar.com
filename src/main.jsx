import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ProfileCard from "./ProfileCard.jsx";
import Bio from "./Bio.jsx";
import Navbar from "./Navbar.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact.jsx";
import ursi_poster_img from "/URSI_Poster_Full.png";

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
              <ProjectCard
                title="Cognitive Science Eye-Tracking"
                description="blah"
                languages={["blah", "blah2", "blah3"]}
                image={ursi_poster_img}
              />
              <ProjectCard
                title="Cognitive Science Eye-Tracking"
                description="blah"
                languages={["blah", "blah2", "blah3"]}
              />
            </div>
          }
        />
        <Route
          path="/Contact"
          element={
            <div className="main-container">
              <Contact />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
