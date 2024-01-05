import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Title from "./Title.jsx";
import About from "./About.jsx";
import Resume from "./Resume.jsx";
import Projects from "./Projects.jsx";
import Socials from "./Socials.jsx";
import Footer from "./Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="vertically-center-container">
      <Title />
      <About
        bio={`I’m a computer engineering student at Dartmouth College (‘26) 
        and a computer science student at Vassar College ('25). As a part of 
        their dual degree program, I will be getting two bachelor’s degrees, 
        one from each school. I’m interested in using the latest technology 
        to solve unique problems. In particular, I enjoy doing full-stack web development, 
        and want to learn more about machine learning, and computer hardware.`}
      />
      <Resume />
      <Projects />
      <Socials />
      <Footer />
    </div>
  </React.StrictMode>
);
