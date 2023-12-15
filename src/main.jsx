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
                isOdd={true}
                title="Cognitive Science Eye-Tracking"
                description="This project was made for the Undergraduate Research Summer Institute in 2021. 
                In this project, I worked with 2 other students and a Cognitive Science Professor at Vassar 
                College to create software that could predict where users were looking at on a screen during
                online cognitive science experiements. We created a neural network incorporating various different
                deep learning techniques to make a model for our predictions. We also created Javascript software that
                could collect web cam screenshots at very quick intervals to ensure that we could measure changes
                in eye position within fractions of a second. If you'd like more info, click on the button
                below to see our poster!"
                languages={["Python", "Tensorflow", "Javascript"]}
                image={ursi_poster_img}
                button_name="Poster"
                link="https://drive.google.com/drive/folders/1p-ir201LI5uP1NtnqM1oqP6Dh-R_k7-b"
              />
              <ProjectCard
                isOdd={false}
                title="Cognitive Science Eye-Tracking"
                description="blah"
                languages={["blah", "blah2", "blah3"]}
                image={ursi_poster_img}
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
