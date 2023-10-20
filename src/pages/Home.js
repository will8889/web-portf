import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../ProjectList/ProjectList";

import "../styles/Projects.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Home() {
  const githubURL = "https://github.com/will8889";
  const linkedinURL = "https://www.linkedin.com/in/william-lucianto-santoso";
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm William Lucianto Santoso</h2>
        <div className="prompt">
          <p>A fresh graduate computer science major with a passion for learning and improving. </p>
          <div className="socialMedia">
            <a href={githubURL} target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
            <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <p>williamluciantos@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM,
              Bootstrap, Yarn
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, Laravel, CodeIgniter,
              MySQL, MSSQL, PostgreSQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C++, PHP</span>
          </li>
        </ol>
      </div>
      <div className="projects">
        <h1> Projects</h1>
        <div className="projectList">
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem id={idx} name={project.name} image={project.image} />
            );
          })}
        </div>
      </div>
      <div className="experiences">
      <h1> Experiences</h1>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Binus International University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Jakarta, Indonesia
          </h4>

          <p> S1 Computer Science - GPA 3.85</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 2022 - July 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer (internship) - PT. Sentra Solusi Informatika
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Jakarta, Indonesia
          </h4>
          <p>Create pages based on given design</p>
          <p>Work together with QA team to make sure the page is up to standard</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="September 2022 - February 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer (internship) - PT. BCA Finance
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Jakarta, Indonesia
          </h4>
          <p>Collaborate with different teams from developing new pages until implementation</p>
          <p>Fix bugs or modified existing pages according to the change request</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </div>
  );
}

export default Home;
