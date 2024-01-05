import "./Resume.css";
import { useState } from "react";

import ResumeDescription from "./ResumeDescription";

const ResumeDescriptionDatalist = [
  [
    "Research Fellow",
    "Undergraduate Research Summer Institute",
    [
      `Built deep learning neural networks and implemented various machine learning 
    algorithms to predict user screen gaze location using position of eyes and face as input, 
    and decreased error by 12% from initial results`,
      `Developed VAE model to reduce input 
    face data from 478 vectors to 6, and created animations to visualize error`,
      `Created back-end 
    of web developer API to allow users to easily implement models on real-time webcam video and
    allow for frame-by-frame analysis`,
      `Designed benchmarks in Python to automatically test quality
     of over 13,500 subject videos used as training data
    `,
    ],
  ],
  [
    "Web Development Intern",
    "Vassar Student Association",
    [
      `Updated student government website with new information about legislation, and designed pages for new clubs`,
      `Implemented casework system to anonymously route student concerns to most relevant senator via email`,
      `Improved accessibility by identifying and replacing CSS styles incompatible with screen reading software`,
    ],
  ],
  [
    "Research Intern",
    "Brookhaven National Laboratory (BNL)",
    [
      `Created CentOS 8 containers in Docker and Singularity for ATLAS and Relativistic Heavy Ion Collider projects`,
      `Replaced 133 dependencies with new or alternate versions and wrote custom bash scripts to ensure compliance`,
      `Remotely deployed containers on high power computing cluster using OpenSSH and HTCondor`,
    ],
  ],
];

function Resume() {
  const [activeButton, setActiveButton] = useState(0);
  const [ResumeDescriptionData, setResumeDescriptionData] = useState(
    ResumeDescriptionDatalist[0]
  );

  let handleClick = (button_clicked) => (e) => {
    setActiveButton(button_clicked);
    setResumeDescriptionData(ResumeDescriptionDatalist[button_clicked]);
  };

  return (
    <div className="resume-container">
      <h3>Resume</h3>
      <div className="resume-container__body">
        <div className="resume-container__resume-dates">
          <button
            className={activeButton === 0 ? "active" : "inactive"}
            onClick={handleClick(0)}
          >
            May 2022 - May 2023
          </button>
          <button
            className={activeButton === 1 ? "active" : "inactive"}
            onClick={handleClick(1)}
          >
            Aug 2021 - May 2022
          </button>
          <button
            className={activeButton === 2 ? "active" : "inactive"}
            onClick={handleClick(2)}
          >
            June 2020 - Sept 2020
          </button>
        </div>
        <ResumeDescription
          title={ResumeDescriptionData[0]}
          company={ResumeDescriptionData[1]}
          description={ResumeDescriptionData[2]}
        />
      </div>
    </div>
  );
}

export default Resume;
