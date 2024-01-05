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
            longDescription={
              "Developed deep learning neural networks to predict where users were looking at on a screen as part of the jsPsych research lab Developed deep learning neural networks to predict where users were looking at on a screen as part of the jsPsych research lab Developed deep learning neural networks to predict where users were looking at on a screen as part of the jsPsych research lab Developed deep learning neural networks to predict where users were looking at on a screen as part of the jsPsych research lab Developed deep learning neural networks to predict where users were looking at on a screen as part of the jsPsych research lab Developed deep learning neural networks to predict where users were looking at on a screen as part of the jsPsych research lab Developed deep learning neural networks to predict where users were looking at on a screen as part of the jsPsych research lab Developed deep learning neural networks to predict where users were looking at on a screen as part of the jsPsych research lab"
            }
            languages={["Javascript", "TensorFlow", "Python"]}
            link={"https://google.com"}
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
            longDescription={""}
            languages={["HTML", "CSS", "Javascript"]}
            link={""}
            btnText={""}
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
            longDescription={""}
            languages={""}
            link={""}
            btnText={""}
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
            longDescription={""}
            languages={""}
            link={""}
            btnText={""}
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
            longDescription={""}
            languages={""}
            link={""}
            btnText={""}
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
            longDescription={""}
            languages={""}
            link={""}
            btnText={""}
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
            longDescription={""}
            languages={""}
            link={""}
            btnText={""}
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
            longDescription={""}
            languages={""}
            link={""}
            btnText={""}
            showFullExample={setShowFullExample}
            fullExampleDetails={setFullExampleDetails}
          />
        </div>
      )}
    </div>
  );
}

export default Projects;
