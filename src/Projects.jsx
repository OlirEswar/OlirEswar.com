import "./Projects.css";
import ursi_logo from "/ursi-logo.png";
import vsa_logo from "/vsa-logo.png";
import docker_file_img from "/docker-file-img.png";
import personal_website_img from "/personal-website-img.png";
import fpga_gol_img from "/fpga-gol-img.png";
import duck_car_img from "/duck-car-img.png";
import amethyst_img from "/amethyst-img-2.png";
import amethyst_img_wide from "/amethyst-img.png";
import custom_linux_img from "/custom-linux-img.png";

import ProjectExample from "./ProjectExample";
import ProjectFullExample from "./ProjectFullExample";
import { useState } from "react";

function Projects() {
  let [showFullExample, setShowFullExample] = useState(false);
  let [fullExampleDetails, setFullExampleDetails] = useState({
    name: "Eye-tracking ALI",
    description:
      "Developed deep learning neural networks to predict where users were looking at on a screen as part of the jsPsych research lab Developed deep learning neural networks to predict where users were looking at on a screen as part of the jsPsych research lab Developed deep learning neural networks to predict where users were looking at on a screen as part of the jsPsych research lab Developed deep learning neural networks to predict where users were looking at on a screen as part of the jsPsych research lab Developed deep learning neural networks to predict where users were looking at on a screen as part of the jsPsych research lab Developed deep learning neural networks to predict where users were looking at on a screen as part of the jsPsych research lab Developed deep learning neural networks to predict where users were looking at on a screen as part of the jsPsych research lab Developed deep learning neural networks to predict where users were looking at on a screen as part of the jsPsych research lab",
    languages: ["Javascript", "TensorFlow", "Python"],
    link: "https://youtube.com",
    btnText: "View Poster",
  });

  return (
    <div className="projects-container">
      <h3>Projects</h3>

      {showFullExample ? (
        <ProjectFullExample
          name={fullExampleDetails.name}
          description={fullExampleDetails.description}
          languages={fullExampleDetails.languages}
          showMiniProjectExample={setShowFullExample}
          link={fullExampleDetails.link}
          btnText={fullExampleDetails.btnText}
        />
      ) : (
        <div className="projects-container__list">
          <ProjectExample
            title={"Eye-tracking AI"}
            image={ursi_logo}
            altText={"URSI Logo"}
            description={
              "Developed deep learning neural networks to predict where users were looking at on a screen as part of the jsPsych research lab"
            }
            longDescription={`This project was a part of the 2022 Undergraduate Research Summer Institute held by Vassar College. 
            I worked full-time as a part of a three person group on the jsPsych team creating neural networks that used webcam video data to determine 
            where users were looking at on a screen. This project was made to improve upon existing packages like WebGazer and optimize 
            the workflow for online Cognitive Science experiments. The first stage of the project involved creating a Javascript API so 
            that users could easily set up user web-cams and write custom callback functions to perform operations on each frame. The second
            stage of the project involved creating different types of neural networks to create an system that could accurately predict
            where users were looking at on their screen solely from their webcam video. We used various techniques like linear regression, and
            data augmentation, as well as different types of neural networks like variational auto encoders and transformers to achieve our goal.
            Please take a look at our poster to see our progress as of September 30th 2022.`}
            languages={["Javascript", "TensorFlow", "Python"]}
            link={
              "https://drive.google.com/drive/folders/1M5lW86s93a4rdrn7TsRah4YF92bnq2bu?usp=sharing"
            }
            btnText={"View Poster"}
            showFullExample={setShowFullExample}
            fullExampleDetails={setFullExampleDetails}
          />

          <ProjectExample
            title={"VSA Website"}
            image={vsa_logo}
            altText={"VSA Logo"}
            description={
              "Helped design, create, and update the Vassar Student Association (VSA) website"
            }
            longDescription={`As a web development intern for the Vassar Student Association, I was in charge of updating the group’s 
            website with new information and pages. I often worked with student senators and school administrators  to implement their 
            ideas into the website. For example, I created a casework system that allowed students to anonymously direct concerns to 
            different school departments via email. In addition, I also found bugs within the existing website and resolved them. This 
            included finding and replacing CSS styles that could not be read by screen reading software. I eventually became the VSA 
            Chair of Communications, where I took a leadership role and mentored a new web development intern.
            `}
            languages={["WordPress", "CSS", "Javascript"]}
            link={"https://vsa.vassar.edu/"}
            btnText={"View Live Site"}
            showFullExample={setShowFullExample}
            fullExampleDetails={setFullExampleDetails}
          />
          <ProjectExample
            title={"Ion Collider Docker Containers"}
            image={docker_file_img}
            altText={"Docker File"}
            description={
              "Built CentOS 8 Docker containers for the Relativistic Heavy Ion Collider at Brookhaven National Lab"
            }
            longDescription={`I worked in the Brookhaven National Laboratory (BNL) Scientific Data and Computing Center as a full time 
            research intern. During this time, I created CentOS 8 operating system environment containers for the Relativistic Heavy Ion 
            Collider and ATLAS projects. This was done to easily migrate from the projects’  old operating system, Scientific Linux 7, 
            which was being discontinued at the time. My work included identifying dependencies of existing software, finding appropriate 
            replacements in CentOS 8, and adding them to Docker and Singularity containers. At the end of this project, I ran the containers 
            through various existing benchmarks to ensure that the changes had not affected the results of the existing software and then deployed these 
            containers onto the BNL HPC cluster using HTCondor. Please take a look at the poster I created at the end of this internship.
            `}
            languages={["Docker", "Singularity", "Linux"]}
            link={
              "https://drive.google.com/drive/folders/1MwJ1yD4ZDH50w8h8nM98CmWD0JKiW1zn?usp=sharing"
            }
            btnText={"View Poster"}
            showFullExample={setShowFullExample}
            fullExampleDetails={setFullExampleDetails}
          />
          <ProjectExample
            title={"Personal Website"}
            image={personal_website_img}
            altText={"My personal website"}
            description={
              "Designed and developed the website you are looking at right now to showcase resume and projects"
            }
            longDescription={`This is my personal website! I created this to showcase my resume and projects through posters, reports, live sites, 
            and other deliverables, so that people can learn more about the projects that I have been a part of. I used tools like Figma and 
            Adobe Illustrator to design the site and utilized React and CSS to implement the front-end. Please take a look around! If you would like, 
            you can view the code for this website on GitHub.   `}
            languages={["React", "CSS", "Figma"]}
            link={"https://github.com/OlirEswar/OlirEswar.com"}
            btnText={"Github"}
            showFullExample={setShowFullExample}
            fullExampleDetails={setFullExampleDetails}
          />
          <ProjectExample
            title={"FPGA Game of Life"}
            image={fpga_gol_img}
            altText={"FPGA Game of Life"}
            description={
              "Programmed Conway's Game of Life on Xilinx FPGA and displayed output on VGA monitor"
            }
            longDescription={`I worked with a partner to create an FPGA version of Conway’s Game of Life, a famous cellular automation. We had used an VGA output to display the results on a computer monitor.
             We allowed users to place different initial states using buttons on the FPGA, and then allowed the simulation to run and update until the user reset it. 
             We first designed RTL diagrams and state machines by hand to determine what type of logic blocks we would need. We then used Xilinx Vivado to write the 
             VHDL needed to implement our design. Some challenges included making sure that the timing for game logic aligned with the timing for the VGA screen updates, 
             so that the state of the cells updated appropriately. Please take a look at the report we created for this project. `}
            languages={["VHDL", "RTL", "Vivado"]}
            link={
              "https://docs.google.com/document/d/1kq-LjcpFeQm685vYGR9cs0rdG2z08dQHtxCyPksfAkI/"
            }
            btnText={"View Report"}
            showFullExample={setShowFullExample}
            fullExampleDetails={setFullExampleDetails}
          />
          <ProjectExample
            title={"Duck Car"}
            image={duck_car_img}
            altText={"Duck Car"}
            description={
              "Designed PD controller for a 'Duck Car' so that it moved in sync with surfaces in front of it, stopping and reversing if it got too close"
            }
            longDescription={`The was the final project in my Control Theory course at Dartmouth (ENGS 26). I worked in a group of three students to design 
             controller that would prevent a car from hitting walls when it got too close. The car would accelerate until a detecting a wall in front of it, 
             and then decelerate as it got closer until it reached a certain distance from the wall. At this point the car would stop. If the car got too close 
             to the wall it would move backwards, until it reached the set distance. We  used MATLAB and sisotool to visualize the root locus plot of different 
             combinations of transfer function poles and zeros, and then designed a controller that had the same transfer function.`}
            languages={["MATLAB", "Control Theory", "Circuit Design"]}
            link={
              "https://docs.google.com/document/d/1H7vwRuo2ZaXuBcM69Ag7h7HsJpmPKCNUOBIc0THSKWk/edit?usp=sharing"
            }
            btnText={"View Report"}
            showFullExample={setShowFullExample}
            fullExampleDetails={setFullExampleDetails}
          />
          <ProjectExample
            title={"Amethyst Productivity Timer"}
            image={screen.width > 505 ? amethyst_img : amethyst_img_wide}
            altText={"Amethyst Productivity Timer"}
            description={
              "Developed prototype Android app productivity timer with custom minigames as rewards for sustained periods of work"
            }
            longDescription={`I worked with a partner to create a prototype Android productivity app. We modeled our application on the pomodoro timer method
            where people set a time periods to work and time periods to take breaks to sustain their productivity. Our app implemented this technique but also
            added a bejewled styled match-3 minigame that users could play during their breaks. In addition, our app tracked high scores, as well as work and
            break sessions completed. This was part of our Computer Science 203 class at Vassar College where we spent the entire semester developing an independent 
            project. We engaged in agile development practices and documented the project with various use-cases using PlantUML diagrams. In addition, we learned
            best practices for development, such as which which data structures and algorithms to use in particular scenarios, the MVC model, and how to write informative
            unit tests. `}
            languages={["Java", "Android Studio", "Unit Testing"]}
            link={"https://github.com/OlirEswar/Amethyst"}
            btnText={"Github"}
            showFullExample={setShowFullExample}
            fullExampleDetails={setFullExampleDetails}
          />
          <ProjectExample
            title={"Custom Linux Distribution"}
            image={custom_linux_img}
            altText={"Custom Linux Distribution"}
            description={
              "Created minimal Linux distribution from scratch and wrote custom C++ software for it"
            }
            longDescription={`I created a minimalistic custom version of Linux to learn more about the structure of the operating systems. I used the book
            Linux From Scratch as a guide to learn about the different processes needed to accomplish this goal. After the completion of this minimal system, I created
            a small C++ calculator for it.`}
            languages={["Linux", "Bash"]}
            link={
              "https://drive.google.com/drive/folders/1udAiW_xowJ-HCKgcZMLWWMkjz8s19nrv?usp=sharing"
            }
            btnText={"View Screenshots"}
            showFullExample={setShowFullExample}
            fullExampleDetails={setFullExampleDetails}
          />
        </div>
      )}
    </div>
  );
}

export default Projects;
