import "./Resume.css";
import { useState } from "react";

import ResumeDescription from "./ResumeDescription";

const ResumeDescriptionDatalist = [
  [
    "Product Management & Analytics Intern",
    "Capital One",
    [
      `Improved short-term prediction accuracy on auto loan loss forecast by 8% by developing model based on delinquency roll
rates and outstanding balance growth rate`,
      `Built internal Python tool to allow users to run model on varying input parameters and interact with intermediate outputs at
each modeling step`,
      `Created Snowflake SQL pipeline to organize millions of loan records by delinquency and origination month`,
    ],
  ],
  [
    "Software Engineer Intern (Control Systems)",
    "Arconic",
    [
      `Collaborated with metallurgists to build full stack app enabling users to override machine settings and record deviations
from expected results using C, HTMX, PHP, and PostgreSQL`,
      `Reduced process time by 2 hours per week by creating dynamic C-based speed control algorithm for coil production line`,
      `Designed web dashboard using SQLite to monitor real-time line speed and downtime, reducing delays by 7%`,
    ],
  ],
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
            June 2025 - Aug 2025
          </button>
          <button
            className={activeButton === 1 ? "active" : "inactive"}
            onClick={handleClick(1)}
          >
            June 2024 - Aug 2024
          </button>
          <button
            className={activeButton === 2 ? "active" : "inactive"}
            onClick={handleClick(2)}
          >
            May 2022 - May 2023
          </button>
          <button
            className={activeButton === 3 ? "active" : "inactive"}
            onClick={handleClick(3)}
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
