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
import Resume from "./Resume.jsx";
import ursi_poster_img from "/URSI_Poster_Full.png";
import personal_website_img from "/personal_website.png";
import vsa_website from "/VSA_website.png";
import FPGA_conway from "/FPGA_conway.png";
import HSRP_img from "/HSRP_poster.png";
import ContactForm from "./ContactForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {<Navbar />}
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
            <div className="resume-container">
              <h1 id="resume-title">Resume</h1>
              <Resume
                is_even={false}
                title="Research Fellow"
                workplace="Vassar College Cognitive Science Department"
                location="Poughkeepsie, NY"
                date="May 2022 - May 2023"
                bullet_points={[
                  "Built deep learning neural networks and implemented various machine learning algorithms to predict user screen gaze location using position of eyes and face as input, and decreased error by 12% from initial results",
                  "Developed VAE model to reduce input face data from 478 vectors to 6, and created animations to visualize error",
                  "Created back-end of web developer API to allow users to easily implement models on real-time webcam video and allow for frame-by-frame analysis",
                  "Designed benchmarks in Python to automatically test quality of over 13,500 subject videos used as training data",
                ]}
              />
              <Resume
                is_even={true}
                title="Web Development Intern"
                workplace="Vassar Student Association"
                location="Poughkeepsie, NY"
                date="August 2021 - May 2022"
                bullet_points={[
                  "Worked with VSA officials and Vassar students to regularly update association website UI, add information about new legislation, and implement new features",
                  "Created system for digitally archiving committee meeting minutes on website while keeping private information from public view",
                  "Developed casework system to allow students to anonymously send messages or concerns to available senators through email",
                ]}
              />
              <Resume
                is_even={false}
                title="Research Intern"
                workplace="Brookhaven National Laboratory"
                location="Upton, NY"
                date="June 2020 - September 2020"
                bullet_points={[
                  "Created CentOS 8 containers in Docker and Singularity for ATLAS and Relativistic Heavy Ion Collider projects",
                  "Replaced 133 dependencies with new or alternate versions and wrote custom bash scripts to ensure compliance",
                  "Remotely deployed containers on high power computing cluster using OpenSSH and HTCondor",
                ]}
              />
            </div>
          }
        />
        <Route
          path="/Projects"
          element={
            <div className="project-container">
              <h1>Projects</h1>
              <ProjectCard
                isOdd={true}
                title="Eye-Tracking AI for Cognitive Science"
                description="This project was made for the Undergraduate Research Summer Institute in 2021 
                in collaboration with Dr. de Leeuw, a Cognitive Science Professor at Vassar College, and
                2 other students. We created software that could predict where users were looking at on a screen during
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
                title="Personal Website"
                description="This is the website that you are on right now! I made this website to showcase the
                different projects that I've done through the years and practice my frontend development skills.
                I designed and built the frontend using React and styled the website using CSS."
                languages={["HTML", "CSS", "React"]}
                image={personal_website_img}
                button_name="Github"
                link="https://www.youtube.com/watch?v=ayG11VflF50"
              />
              <ProjectCard
                isOdd={true}
                title="FPGA Game of Life"
                description="I worked with a friend to implement Conway's Game of Life on an FPGA. We used VHDL
                to program our hardware, so that it would calculate the appropriate state and display the pattern
                on a VGA screen. This project was made for ENGS 31: Digital Electronics at Dartmouth."
                languages={["VHDL", "FPGA", "Vivado"]}
                image={FPGA_conway}
                button_name="Demo Video"
                link="https://www.youtube.com/watch?v=ayG11VflF50"
              />

              <ProjectCard
                isOdd={false}
                title="Vassar Student Association Website"
                description="I was the web development intern at the Vassar Student Association during my freshman year.
                I was tasked with updating the website whenever new information, like new legislation, events, or officials
                were recognized. I worked on creating new pages for different organizations on campus and created a digital archive
                for committee meeting minutes. I also helped develop a  casework system, so that students could confidentially 
                direct concerns to senators via the website. I used wordpress, HTML, CSS, and Javascript to implement the features we needed."
                languages={["Wordpress", "Javascript", "CSS"]}
                image={vsa_website}
                button_name="View Site"
                link="https://vsa.vassar.edu/"
              />
              <ProjectCard
                isOdd={true}
                title="Docker Containers for Physics Experiments"
                description="I worked at the Brookhaven National Lab to create Linux operating system environment container for the
                Relativistic Heavy Ion Collider project. This was done to ensure that the software controlling the experiments could
                be easily migrated from Scientific Linux 7 to CentOS 8 without affecting its functionality and causing errors. During
                the internship I found replacements for packages that did not have CentOS 8 versions and wrote custom scripts to deploy
                the containers on the high-performance cluster."
                languages={["Linux", "Docker", "RPM"]}
                image={HSRP_img}
                button_name="Poster"
                link="https://drive.google.com/drive/folders/1p-ir201LI5uP1NtnqM1oqP6Dh-R_k7-b"
              />
            </div>
          }
        />
        <Route
          path="/Contact"
          element={
            <div className="contact-and-form-container">
              <Contact />
              <ContactForm />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
